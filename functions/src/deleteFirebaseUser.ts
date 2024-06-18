const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
import { verifyAdminToken } from './helpers/verifyAdminToken';
const { getAuth } = require('firebase-admin/auth');

// @ts-ignore
export const deleteFirebaseUser = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        try {

            const userId = request.body.userId;

            console.log("Authoriation Header:", request.headers.authorization);

            const decodedToken = await verifyAdminToken(request.headers.authorization);

            if (!decodedToken) {
                response.status(401).send('Unauthorized ff');
                return;
            }

            getAuth()
                .deleteUser(userId)
                .then(() => {
                    console.log('Successfully deleted user');
                    response.status(200).send({ message: "User deleted"});

                })
                // @ts-ignore
                .catch((error) => {
                    console.log('Error deleting user:', error);
                    response.status(401).send('Unauthorized yy');

                });



        } catch (error) {
            console.error("Error downloading CSA:", error);
            response.status(401).send('Unauthorized dd');
        }
    });
});
