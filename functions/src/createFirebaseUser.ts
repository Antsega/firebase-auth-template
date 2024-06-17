const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

import { getAuth } from "firebase-admin/auth";
import { firestore } from "firebase-admin";
import axios from "axios";

const CUSTOM_TEST_TOKEN = "dev"; // Define a custom token for testing

export const createFirebaseUser = functions.https.onRequest(
  async (request: any, response: any) => {
    cors(request, response, async () => {
      try {
        const auth = getAuth();
        const { password, ...otherData } = request.body;

        const userData = Object.fromEntries(
          Object.entries(otherData).filter(([key, value]) => value !== "")
        );

        // For testing: Check if the authorization header contains the custom token
        if (request.headers.authorization !== `Bearer ${CUSTOM_TEST_TOKEN}`) {
          response.status(401).send("Unauthorized");
          return;
        }

        const userRecord = await auth.createUser({
          //@ts-ignore
          email: userData.email,
          emailVerified: false,
          password: password,
          disabled: false,
        });

        userData.isOwnPassword = "false";
        await firestore().collection("users").doc(userRecord.uid).set(userData);

        const emailVerificationLink = await auth.generateEmailVerificationLink(
          //@ts-ignore          
          userData.email
        );

        await firestore()
          .collection("mail")
          .add({
            to: userData.email,
            message: {
              subject: "Welcome to the [...]", // change as needed
              html: emailText(userData, emailVerificationLink, password),
            },
          });

        response.status(200).send({ message: "User created" });

      } catch (error: unknown) {
        console.error("Error creating firebase user:", error);
      
        if (axios.isAxiosError(error) && error.response) {
          response.status(error.response.status).send({ message: error.message || "An error occurred in the backend service" });
        } else if (error instanceof Error && (error as any).status) {
          // Handling generic errors with a status property
          response.status((error as any).status).send({ message: error.message || "An unexpected error occurred" });
        } else {
          // Fallback error handling
          response.status(502).send({ message: "Bad gateway error or other network issue" });
        }
      }
    });
  }
);

const emailText = (
  userData: any, 
  verifyLink: string,
  password: string
) => {
  return `
  <html>
  <body>
      <p>Hi ${userData.firstName} ${userData.lastName},</p>
      <p>Welcome to the [...].</p>
      <p>Your generated account details are below:<br>
         Email: ${userData.email}<br>
         Password: ${password}</p>
      <p>Please click the button below to verify your email and login:</p>
      <a href="${verifyLink}" style="text-decoration: none;">
          <button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; text-align: center;">
              Verify Email
          </button>
      </a>
  </body>
</html>
  `;
};
