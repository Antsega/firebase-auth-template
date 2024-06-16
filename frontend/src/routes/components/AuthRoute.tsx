import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const AuthRoute = ({ children }: any) => {
    const { isAuthenticated, userInfo } = useAuth();

    const userType = userInfo?.role;

    if (isAuthenticated) {
        return <Navigate to={`/${userType}`} />;
    }
    return children;
};

export default AuthRoute;