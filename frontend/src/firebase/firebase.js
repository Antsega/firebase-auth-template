var admin = require("firebase-admin");
import {getAuth} from "firebae/auth"

var serviceAccount = require("../../../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
