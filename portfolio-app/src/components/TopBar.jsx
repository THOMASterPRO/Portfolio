import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import logo from '../assets/logo.svg';
import { useI18n } from '../i18n/I18nProvider';
import { useT } from '../i18n/useT';

const TopBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, setLanguage } = useI18n();
    const t = useT('common');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const toggleLanguage = () => setLanguage(language === 'en' ? 'nl' : 'en');

    return (
        <>
            <nav className="top-bar">
                <div className="top-bar-brand">
                    <img src={logo} alt="Logo" className="top-bar-icon" />
                    
                </div>

                <div>
                    <span className="top-bar-title">{t('topbar.name')}</span>
                </div>

                <div className="nav-links desktop-links">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>{t('topbar.nav.home')}</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>{t('topbar.nav.projects')}</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>{t('topbar.nav.contact')}</NavLink>
                </div>

                <div className="top-bar-actions">
                    <button
                        className="language-btn"
                        onClick={toggleLanguage}
                        aria-label={t('topbar.language.label')}
                    >
                        {language.toUpperCase()}
                    </button>
                </div>

                <button className="burger-btn" onClick={toggleMenu} aria-label={t('topbar.menuToggle')}>
                    <span className={`burger-icon ${menuOpen ? 'open' : ''}`}></span>
                </button>
            </nav>

            {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>{t('topbar.nav.home')}</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>{t('topbar.nav.projects')}</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>{t('topbar.nav.contact')}</NavLink>
            </div>
        </>
    );
};

export default TopBar;
