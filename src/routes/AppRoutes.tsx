import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useLocation
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthProvider from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/common/Footer';

const AppRoutes: React.FC = () => {
    const location = useLocation();

    const showHeaderAndFooter = !['/login', '/notfound'].includes(location.pathname);

    return (
        <AuthProvider>
            <Router>
                {showHeaderAndFooter && <Navbar />}
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {showHeaderAndFooter && <Footer />}
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;
