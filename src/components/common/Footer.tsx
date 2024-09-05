// src/components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="layout-footer w-full">
            <div className="flex justify-content-center w-full">
                <span className="font-medium ml-2">&copy; {new Date().getFullYear()} CapsShop. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
