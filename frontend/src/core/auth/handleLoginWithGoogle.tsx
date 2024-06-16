import React from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getAdditionalUserInfo,
} from "@firebase/auth";
import { setJwtToken } from '../api/api';
import { createUser, getUserProfile } from '../api/firebase';
import { getUTCtimeNow } from '../utils';

//@ts-ignore
export const handleLoginWithGoogle = async (setIsAuthenticated, setUserInfo) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredentialObj = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(userCredentialObj);
      if (!credential) {
        console.error('No credentials found');
        return false;
      }
      const token = await userCredentialObj.user.getIdToken();
      if (!token) {
        throw new Error('No access token found.');
      }
      setJwtToken(token);

      setIsAuthenticated(true);

      const additionalUserInfo = getAdditionalUserInfo(userCredentialObj);
      const firebaseUserProfile = await getUserProfile(userCredentialObj.user.uid) // doc(db, `users/${userId}`);

      console.log('firebaseUserProfile', firebaseUserProfile)
      const isNewUser = additionalUserInfo?.isNewUser || firebaseUserProfile === null;

      console.log('additionalUserInfo', additionalUserInfo);

      if (isNewUser) {
        const user = userCredentialObj.user;
        const data = user.toJSON();
        console.log("user data", data)

        const utcTimeNow = getUTCtimeNow();

        const additionalData = {
          name: userCredentialObj.user.displayName,
          email: userCredentialObj.user.email,
          phoneNumber: userCredentialObj.user.phoneNumber,
          photoUrl: userCredentialObj.user.photoURL,
          providerId: userCredentialObj.user.providerId,
          dateTimeCreated: utcTimeNow
        }


        setUserInfo(data);
        const docSnapData = await createUser(user, additionalData);
      }

      console.log('isNewUser', isNewUser);

      return true;
    } catch (error) {
      console.error('Error logging in with Google:', error);
      return false;
    }
  };