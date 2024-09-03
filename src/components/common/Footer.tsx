// src/components/common/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__links">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/about" className="footer__link">About</Link>
                    <Link to="/dashboard" className="footer__link">Dashboard</Link>
                </div>
                <div className="footer__social">
                    <a href="https://facebook.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="https://instagram.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
