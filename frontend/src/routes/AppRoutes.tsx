import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound, IsLoading, Welcome } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { Login, SignUp } from '../views/Auth';

export const AppRoutes = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        {isAuthenticated ? (
          <>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Navigate to="/welcome" replace />} />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
