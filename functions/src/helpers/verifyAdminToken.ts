// helpers/verifyToken.js
const admin = require('firebase-admin');

// @ts-ignore
export const verifyAdminToken =  async (authHeader) => {

    try {

        const match = authHeader.match(/^Bearer (.*)$/);
        if (!match) {
            return null;
        }

        const idToken = match[1];

        
        const decodedToken = await admin.auth().verifyIdToken(idToken);

        const user = await admin.firestore().collection('users').doc(decodedToken.uid).get();


        console.log("Decoded token:", decodedToken)

        console.log("User role:", user)

        if (!user) {
            console.log("not user")
            throw new Error('Unauthorized');
        }

        return decodedToken;
    } catch (error) {
        console.error("Error verifying token:", error);
        throw new Error('Token verification failed');
    }

}