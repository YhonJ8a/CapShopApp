import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthProvider from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/common/Footer';

const AppRoutes: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <Home>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/login" element={< Login />} />
                            <Route path="/" element={< Dashboard />}>
                                <Route path="*" element={< NotFound />} />
                            </Route>
                        </Routes>
                        < Footer />
                    </Router>
                </Home>
            </AuthProvider>
        </>
    );
};

export default AppRoutes;
