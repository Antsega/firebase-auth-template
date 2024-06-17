
import {
  getAuth,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
} from "@firebase/auth";
import { removeJwtToken, setJwtToken, getJwtToken } from '../api/api';
import { createUser, getUserProfile, checkUserRole } from '../api/firebase';
import { createFirebaseUser } from '../api/functions'
import { getUTCtimeNow } from '../utils';


//@ts-ignore
export const handleLoginWithEmail = async (email, password, setUserInfo, setIsAuthenticated) => {
    const auth = getAuth();
    try {

      const userCredentialObj = await signInWithEmailAndPassword(auth, email, password);
      const additionalUserInfo = getAdditionalUserInfo(userCredentialObj);
      const jwt = await userCredentialObj.user.getIdToken()
      setJwtToken(jwt);

      const user = userCredentialObj.user;
      const data = user.toJSON();
      setUserInfo(data);
      setIsAuthenticated(true);

      const isNewUser = additionalUserInfo?.isNewUser;

      if (isNewUser) {

        const utcTimeNow = getUTCtimeNow();
        const additionalData = {
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
          providerId: user.providerId,
          dateTimeCreated: utcTimeNow
        }

        setUserInfo(data);
        const docSnapData = await createFirebaseUser(user);
        // console.log('docSnapData', docSnapData)
      }

      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  };