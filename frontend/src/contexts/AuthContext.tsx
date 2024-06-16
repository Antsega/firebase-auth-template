import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  getAuth,
  signOut,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset
} from "@firebase/auth";
import { app } from '../core/config/firebase';
import { removeJwtToken, setJwtToken, getJwtToken } from '../core/api/api';
import { handleLoginWithGoogle } from '../core/auth/handleLoginWithGoogle';
import { handleLoginWithEmail } from '../core/auth/handleLoginWithEmail';
import { getUserProfile } from '../core/api/firebase';

// Define types for AuthContext
type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userInfo: UserInfoType | null;
  setUserInfo: (userInfo: UserInfoType) => void;
  isSuperuser: () => boolean;
  isLoading: boolean;
  loginWithEmail: (credentials: LoginCredentials) => Promise<any>;
  loginWithGoogle: () => Promise<any>;
  logout: () => void;
  handleSendPasswordResetEmail: (email: string) => Promise<boolean>;
  handleVerifyPasswordResetCode: (code: string) => Promise<boolean>;
  handleConfirmPasswordReset: (code: string, newPassword: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app);

  const isSuperuser = () => {
    return userInfo ? (userInfo.user_type === "admin") : false;
  };

  // Auth functions
  const loginWithEmail = async (credentials: LoginCredentials) => {
    return await handleLoginWithEmail(credentials.email, credentials.password, setUserInfo, setIsAuthenticated);
  };

  const loginWithGoogle = async () => {
    return await handleLoginWithGoogle(setIsAuthenticated, setUserInfo);
  };

  const logout = async () => {
    removeJwtToken();
    return await signOut(auth);
  };

  const handleSendPasswordResetEmail = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error('Error sending password reset email:', error);
      return false;
    }
  };

  const handleVerifyPasswordResetCode = async (code: string) => {
    try {
      const response = await verifyPasswordResetCode(auth, code);
      console.log('verify password reset response', response);
      return true;
    } catch (error) {
      console.error('Error verifying password reset code:', error);
      return false;
    }
  };

  const handleConfirmPasswordReset = async (code: string, newPassword: string) => {
    try {
      const response = await confirmPasswordReset(auth, code, newPassword);
      console.log('confirm password reset response', response);
      return true;
    } catch (error) {
      console.error('Error confirming password reset:', error);
      return false;
    }
  };

  const refreshUserData = async (currentUser: User) => {
    const jwtToken = await currentUser?.getIdToken();
    if (jwtToken) {
      setJwtToken(jwtToken);
    }
    const docSnapData = await getUserProfile(currentUser.uid);
    if (docSnapData) {
      docSnapData.uid = currentUser.uid;
      setUserInfo(docSnapData);
    }
    console.log('docSnapData', docSnapData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      setIsAuthenticated(!!user);
      if (user) {
        refreshUserData(user);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      userInfo,
      setUserInfo,
      isSuperuser,
      isLoading,
      loginWithEmail,
      loginWithGoogle,
      logout,
      handleSendPasswordResetEmail,
      handleVerifyPasswordResetCode,
      handleConfirmPasswordReset
    }}>
      {children}
    </AuthContext.Provider>
  );
};
