import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {IsLoading } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { Login, SignUp, Welcome } from '../views/Auth';

import { AuthRoute, ProtectedRoute } from './components/'

export const AppRoutes = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
    <IsLoading />
    );
  }


  const AuthRoutes = () => {
  return (
    <>
        <Route path="/login" element={
            <AuthRoute>
                <Login />
            </AuthRoute>
            } />
        <Route path="/signup" element={
            <AuthRoute>
                <SignUp />
            </AuthRoute>
            } />
        </>
  )
}

    // const SharedRoutes = () => {
    //     return (
    //         <>
    //         <Route path="/welcome" element={
    //         <ProtectedRoute>
    //             <SignUp />
    //         </ProtectedRoute>
    //         } />
    //         </>
    //     )
    // } 


return (
    <Router>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            {/* {AuthRoutes()}

            {SharedRoutes()} */}
        </Routes>
    </Router>
)
};
