// helpers/verifyToken.js
const admin = require('firebase-admin');

// @ts-ignore
export const verifyToken =  async (authHeader) => {

    try {

        const match = authHeader.match(/^Bearer (.*)$/);
        if (!match) {
            return null;
        }

        const idToken = match[1];

        
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        console.log("Token verified successfully:", decodedToken);
        return decodedToken;
    } catch (error) {
        console.error("Error verifying token:", error);
        throw new Error('Token verification failed');
    }

}