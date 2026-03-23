const { firestore, auth, storage } = require('../config/firebaseConfig');

exports.addTokens = async (req, res) => {
    try {

        const { email, pointsToken } = req.body;

        if (!email || !pointsToken) {
            return res.status(400).json({
                message: "email and tokens required"
            });
        }

        const userSnapshot = await firestore.collection("users").where("email", "==", email).get();

        if (userSnapshot.empty) {
            return res.status(404).json({
                success: false,
                message: "User do not exist with this email",
            });
        }

        const userDoc = userSnapshot.docs[0];
        const userRef = userDoc.ref;

        const userData = userDoc.data();

        const updatedPoints = (userData.points || 0) + pointsToken;

        await userRef.update({
            points: updatedPoints
        });

        return res.status(200).json({
            success: true,
            message: "Tokens added successfully",
            points: updatedPoints
        });

        
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed in adding points-tokens",
            error: error.message
        });
    }
}