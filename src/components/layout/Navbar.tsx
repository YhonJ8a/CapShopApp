import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <>
            <header className='navbar'>
                <nav className="navbar">
                    <div className="navbar__brand">
                        <Link to="/" className="navbar__brand-link">
                            MyApp
                        </Link>
                    </div>
                    <ul className="navbar__links">
                        <li className="navbar__item">
                            <NavLink to="/" className="navbar__link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/about" className="navbar__link" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/dashboard" className="navbar__link" activeClassName="active">
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
