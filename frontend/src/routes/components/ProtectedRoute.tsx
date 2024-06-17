import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NotFound} from '../../components';


const useProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return { isAuthenticated };
};


const ProtectedRoute = ({ children }: any) => {
    const { isAuthenticated } = useProtectedRoute();

    if (!isAuthenticated) {
        return <NotFound />;
    }

    return children;
};


export default ProtectedRoute;