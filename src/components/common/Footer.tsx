// src/components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} CapsShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
