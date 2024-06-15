const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
import { verifyAdminToken } from './helpers/verifyAdminToken';
import { getAuth } from 'firebase-admin/auth';
import { firestore } from 'firebase-admin';


// admin.initializeApp(); 



// @ts-ignore
export const createFirebaseUser = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {

    try {

      const auth = getAuth();

      const { email, firstName, lastName } = request.body;

      console.log("Authoriation Header:", request.headers.authorization);

      const decodedToken = await verifyAdminToken(request.headers.authorization);

      if (!decodedToken) {
        response.status(401).send('Unauthorized');
        return;
      }

      const userRecord = await auth.createUser({
        email: email,
        emailVerified: false,
        password: 'secretPassword',
        displayName: 'John Doe',
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
      })

      firestore().collection('users').doc(userRecord.uid).set({
        email: email,
        firstName: firstName,
        lastName: lastName,
        role: "freelancer"
      });

      const actionCodeSettings = {
        url: 'https://localhost:3000'
      };

      const passwordResetLink = await auth.generatePasswordResetLink(email, actionCodeSettings);

      console.log('passwordResetLink:', passwordResetLink);

      await firestore()
        .collection("mail")
        .add({
          to: email,
          message: {
            subject: "Welcome to the FreeTech Portal",
            text: passwordResetLink,
            html: passwordResetLink,
          },
        })



      console.log('Successfully created new user:', userRecord.uid);
      // @ts-ignore



      response.status(200).send({ message: "User created" });

    } catch (error) {
      console.error("Error downloading CSA:", error);
      response.status(401).send('Unauthorized');
    }
  });
});
