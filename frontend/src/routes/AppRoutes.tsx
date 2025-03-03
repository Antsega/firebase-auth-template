import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {IsLoading } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { Login, SignUp, Welcome } from '../views/Auth';
import ContactUs from '../views/Auth/ContactUs';
import About from '../views/About/About';
import Anime from '../views/Interests/Anime';
import Games from '../views/Interests/Games';
import TierLists from '../views/Interests/TierLists';
import CookieRun from '../views/Interests/CookieRun';

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
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/interests/anime" element={<Anime />} />
            <Route path="/interests/games" element={<Games />} />
            <Route path="/interests/tier-lists" element={<TierLists />} />
            <Route path="/interests/cookie-run" element={<CookieRun />} />
            {/* {AuthRoutes()}

            {SharedRoutes()} */}
        </Routes>
    </Router>
)
};
