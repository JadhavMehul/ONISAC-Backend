const { firestore, auth, storage } = require('../config/firebaseConfig');

async function getUniqueNumbers() {
  let num1 = Math.floor(Math.random() * 216) + 1;
  let num2;
  do {
    num2 = Math.floor(Math.random() * 216) + 1;
  } while (num1 === num2);

  return [
    String(num1).padStart(3, "0"),
    String(num2).padStart(3, "0")
  ];
}

async function getCard(id) {
    try {
        const doc = await firestore.collection("WWE").doc('2012').collection("SlamAttax-Rebellion").doc(`SAR-${id}`).get();
        
        return doc.data();
    } catch (error) {
        console.log(error);
        
    }
  
}


module.exports = {
  getUniqueNumbers,
  getCard
};
