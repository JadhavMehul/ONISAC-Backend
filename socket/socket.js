const { Server } = require("socket.io");
const { getUniqueNumbers, getCard } = require("../utils/gameUtils");

let io;
let waitingUser = null;
let rooms = {};

const initSocket = (server) => {
  io = new Server(server, {
      cors: { origin: "http://localhost:3000",
      credentials: true,
    },
  });

  
  const startTimer = (roomId) => {
    const room = rooms[roomId];
    if (!room) return;

    // clear old timer if exists
    if (room.timer) {
      clearInterval(room.timer);
      room.timer = null;
    }

    room.timeLeft = 120;

    room.timer = setInterval(() => {
      room.timeLeft = Math.max(0, room.timeLeft - 1);

      io.to(roomId).emit("timer_update", {
        timeLeft: room.timeLeft,
      });

      if (room.timeLeft <= 0) {
        clearInterval(room.timer);

        const [p1, p2] = room.players;

        // ✅ RANDOM STAT LOGIC
        const stats = ["reverse", "block", "ground", "arial", "attack", "defense", "star_rating"];
        const randomStat = stats[Math.floor(Math.random() * stats.length)];

        const value1 = room.data[p1].stats[randomStat];
        const value2 = room.data[p2].stats[randomStat];

        let winner = null;

        if (value1 > value2) winner = p1;
        else if (value2 > value1) winner = p2;

        const p1Socket = room.sockets[p1];
        const p2Socket = room.sockets[p2];

        if (winner === null) {
          io.to(roomId).emit("result", {
            message: "draw",
            other_player_card_data: null,
            selectedStat: { p1: value1, p2: value2 },
          });
        } else {
          p1Socket.emit("result", {
            message: winner === p1 ? "you win" : "you lose",
            other_player_card_data: room.data[p2],
            selectedStat: { p1: value1, p2: value2 },
          });

          p2Socket.emit("result", {
            message: winner === p2 ? "you win" : "you lose",
            other_player_card_data: room.data[p1],
            selectedStat: { p1: value2, p2: value1 },
          });
        }

        // ✅ SWITCH TURN AFTER AUTO PLAY
        room.turn = winner || (room.turn === p1 ? p2 : p1);

        io.to(roomId).emit("turn", {
          turn: room.turn,
        });

        // ✅ START NEXT TIMER
        startTimer(roomId);
      }
    }, 1000);
  };


  io.on("connection", (socket) => {
    const uid = socket.handshake.auth.uid;
    const name = socket.handshake.auth.name;

    if (!uid || !name) {
      console.log("No UID or name, disconnecting:", socket.id);
      socket.disconnect();
      return;
    }

    socket.uid = uid;
    socket.name = name;
    console.log("User connected:", socket.id, "UID:", uid);
    
    socket.on("find_match", async () => {
      // console.log("waiting users", waitingUser);
      
      

      if (waitingUser && waitingUser.uid !== socket.uid) {
        const sorted = [socket.uid, waitingUser.uid].sort();
        const roomId = `room_${sorted[0]}_${sorted[1]}`;
        console.log(roomId);
        
        const turnPlayer = Math.random() < 0.5 ? socket.uid : waitingUser.uid;
        
        
        rooms[roomId] = {
          players: [waitingUser.uid, socket.uid],
          data: {},
          turn: turnPlayer,
          timer: null,
          timeLeft: 120,
          sockets: {
            [socket.uid]: socket,
            [waitingUser.uid]: waitingUser,
          },
        };
        
        socket.join(roomId);
        waitingUser.join(roomId);
        
        io.to(roomId).emit("match_found", {
          roomId,
          players: rooms[roomId].players,
        });

        io.to(roomId).emit("turn", {
          turn: turnPlayer,
        });

        const [num1, num2] = await getUniqueNumbers();

        console.log(num1, num2);
        

        const card1 = await getCard(num1);
        const card2 = await getCard(num2);

        console.log("carsData:",card1, card2);
        

        rooms[roomId].data[socket.uid] = card1;
        rooms[roomId].data[waitingUser.uid] = card2;

        // io.to(roomId).emit("match_found", {
        //   roomId,
        //   players: rooms[roomId].players,
        // });

        // io.to(socket.uid).emit("your_data", card1);
        // io.to(waitingUser.uid).emit("your_data", card2);
        socket.emit("your_data", card1);
        waitingUser.emit("your_data", card2);

        socket.emit("other_user_name", waitingUser.name);
        waitingUser.emit("other_user_name", socket.name);
        


        startTimer(roomId);

        waitingUser = null;


      } else {
        waitingUser = socket;
        console.log("User added to waiting queue:", socket.uid);
      }



      // socket.emit("finding_match", `${message} received on backend`);
    });

    socket.on("select_stat", ({ roomId, stat }) => {
      const room = rooms[roomId];
      if (!room) return;

      if (room.timer) {
        clearInterval(room.timer);
      }

      // ❌ BLOCK if not turn player
      if (socket.uid !== room.turn) {
        console.log("Not your turn:", socket.uid);
        return;
      }

      const [p1, p2] = room.players;

      const value1 = room.data[p1].stats[stat];
      const value2 = room.data[p2].stats[stat];

      console.log("Value 1:", value1);
      console.log("Value 2:", value2);
      

      let winner = null;

      if (value1 > value2) winner = p1;
      else if (value2 > value1) winner = p2;

      // ✅ Send personalized result
      if (winner === null) {
        io.to(roomId).emit("result", {
          message: "draw",
          stat,
          p1Value: value1,
          p2Value: value2,
        });
      } else {
        const p1Socket = room.sockets[p1];
        const p2Socket = room.sockets[p2];

        p1Socket.emit("result", {
          message: winner === p1 ? "you win" : "you lose",
          other_player_card_data: room.data[p2],
          selectedStat: {p1:value1, p2:value2}
        });

        p2Socket.emit("result", {
          message: winner === p2 ? "you win" : "you lose",
          other_player_card_data: room.data[p1],
          selectedStat: {p1:value2, p2:value1}
        });
      }

      // OPTIONAL: switch turn for next round
      room.turn = winner || (socket.uid === p1 ? p2 : p1);
      io.to(roomId).emit("turn", {
        turn: room.turn,
      });
      startTimer(roomId);
    });


    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.uid);

      // ✅ Remove from waiting queue
      if (waitingUser && waitingUser.uid === socket.uid) {
        waitingUser = null;
      }

      // ✅ Find room where this player exists
      const roomId = Object.keys(rooms).find((roomId) =>
        rooms[roomId].players.includes(socket.uid)
      );

      if (!roomId) return;

      const room = rooms[roomId];

      // ✅ Stop timer
      if (room.timer) {
        clearInterval(room.timer);
        room.timer = null;
      }

      const [p1, p2] = room.players;

      // ✅ Find opponent
      const opponent = socket.uid === p1 ? p2 : p1;
      const opponentSocket = room.sockets[opponent];

      if (opponentSocket) {
        opponentSocket.emit("result", {
          message: "you win",
          other_player_card_data: null,
          selectedStat: null,
          reason: "opponent_left",
        });
      }

      // ✅ Cleanup room
      delete rooms[roomId];

      console.log("Room cleaned:", roomId);
    });
  });


  return io;
};

module.exports = { initSocket };
