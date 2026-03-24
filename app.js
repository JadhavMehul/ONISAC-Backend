const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const http = require("http");
const { initSocket } = require("./socket/socket");


const app = express();
dotenv.config();


const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/dataRoute");
const userRoutes = require("./routes/userRoute");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/user", userRoutes);


// 🔹 Create HTTP server from express
const server = http.createServer(app);

// 🔹 Initialize Socket.io
initSocket(server);



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));