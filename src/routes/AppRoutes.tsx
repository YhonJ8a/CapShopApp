import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/common/Footer';

const AppRoutes: React.FC = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path= "/" element = {< Home />} />
                <Route path = "/login" element = {< Login />} />
                <Route path = "/dashboard" element = {< Dashboard />} />
                <Route path = "*" element = {< NotFound />} />
            </Routes>
            < Footer />
        </Router>
        </>
    );
  };

export default AppRoutes;
