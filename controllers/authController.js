const { firestore, auth, storage } = require('../config/firebaseConfig');
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { hashPassword, verifyPassword } = require('../utils/hash');
const { sendVerificationEmail } = require('../utils/emailService');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const { accessCookieOptions, refreshCookieOptions } = require('../utils/cookies');



exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            });
        }

        const userSnapshot = await firestore.collection("users").where("email", "==", email).get();

        if (userSnapshot.empty) {
            return res.status(404).json({
                success: false,
                message: "User do not exist with this email",
            });
        }

        let userData;
        let userId;

        userSnapshot.forEach(doc => {
            userData = doc.data();
            userId = doc.id;
        });

        console.log(userData);
        

        const verifyPasswords = await verifyPassword(password, userData.password);

        if (!verifyPasswords) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(userData);

        res
        .cookie("accessToken", accessToken, accessCookieOptions)
        .cookie("refreshToken", refreshToken, refreshCookieOptions)
        .status(200)
        .json({
            success: true,
            message: "Login successfull",
            user: {
                id: userData.uid,
                email: userData.email,
                name: userData.name,
                points:userData.points,
            },
        });
        

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error login user",
            error: error.message
        });
    }
}


exports.registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields required"
            });
        }

        
        const userRecord = await auth.createUser({
            email: email,
            password: password,
            displayName: name
        });

        const verificationLink = await auth.generateEmailVerificationLink(email);

        await sendVerificationEmail(email, verificationLink);
        
        const hashedPassword = await hashPassword(password);
        const userData = {
            uid: userRecord.uid,
            name: name,
            email: email,
            password: hashedPassword,
            createdAt: new Date(),
            points: 999.99
        };

        await firestore.collection("users").doc(userRecord.uid).set(userData);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            // id: userRef.id
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        });

    }

}


exports.refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ error: 'No refresh token.' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const snapshot = await firestore.collection("users").where("email", "==", decoded.email).get();

    if (snapshot.empty) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    
    let userData;


    snapshot.forEach(doc => {
        userData = doc.data();
    });

    

    const newAccessToken = generateAccessToken(userData);
    
    res
      .cookie('accessToken', newAccessToken, accessCookieOptions)
      .status(200)
      .json({ success: true });
  } catch (err) {
    return res.status(403).json({ error: 'Invalid refresh token.' });
  }
};


exports.getMe = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);



    const snapshot = await firestore.collection("users").where("email", "==", decoded.email).get();

    if (snapshot.empty) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    let userData;

    snapshot.forEach(doc => {
        userData = doc.data();
    });
        
    
    // const emailVerified = [rows].email_verified_at !== null;


    return res.status(200).json({ user: userData });
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};



exports.logoutUser = (req, res) => {
  res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json({ message: "Logged out successfully" });
};