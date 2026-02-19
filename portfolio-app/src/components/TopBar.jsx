import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import logo from '../assets/logo.svg';

const TopBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="top-bar">
                <div className="top-bar-brand">
                    <img src={logo} alt="Logo" className="top-bar-icon" />
                    
                </div>

                <div>
                    <span className="top-bar-title">Thomas Bezemer</span>
                </div>

                <div className="nav-links desktop-links">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
                </div>

                <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`burger-icon ${menuOpen ? 'open' : ''}`}></span>
                </button>
            </nav>

            {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Projects</NavLink>
            </div>
        </>
    );
};

export default TopBar;
