import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <header className='navbar'>
                <nav className="navbar">
                    <div className="navbar__brand">
                        <Link href="/" className="navbar__brand-link">
                            MyApp
                        </Link>
                    </div>
                    <ul className="navbar__links">
                        <li className="navbar__item">
                            <Link href="/" className="navbar__link">
                                Home
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/about" className="navbar__link" >
                                About
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/dashboard" className="navbar__link">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar__login">
                        {!user ? (
                            <button className="navbar__button" onClick={logout}>Logout</button>
                        ) : (
                            <Link className="navbar__button" href="/login">Login</Link>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
