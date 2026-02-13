import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../../context/DarkModeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, enableDarkMode, disableDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'var(--primary-blue)', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: 'var(--primary-purple)', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path d="M100 20L170 60V140L100 180L30 140V60L100 20Z" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="4" 
                    fill="none"/>
              <path d="M85 80H105C115 80 122 87 122 97C122 107 115 114 105 114H95V130H85V80Z" 
                    fill="url(#logoGradient)"/>
            </svg>
            <span className="logo-text">PixelNest</span>
          </Link>

          <div className="header-right-content">
            <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mobile-theme-selector">
                <button 
                  className={`theme-btn ${!isDarkMode ? 'active' : ''}`}
                  onClick={disableDarkMode}
                >
                  <FaSun /> Light Mode
                </button>
                <button 
                  className={`theme-btn ${isDarkMode ? 'active' : ''}`}
                  onClick={enableDarkMode}
                >
                  <FaMoon /> Dark Mode
                </button>
              </div>
              <Link to="/contact" className="btn btn-primary desktop-cta">
                Start Your Project
              </Link> 
            </nav>

            <div className="header-actions">
              <button 
                className="dark-mode-toggle"
                onClick={isDarkMode ? disableDarkMode : enableDarkMode}
                aria-label="Toggle dark mode"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>

              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;