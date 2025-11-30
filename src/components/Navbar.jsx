import React from 'react';
import AshokaChakra from './AshokaChakra';

const Navbar = ({ isDarkMode, toggleTheme, userRole, onLogout, themeClass }) => {
  return (
    <nav className={`navbar ${themeClass}`}>
      <div className="logo-container">
        <AshokaChakra size={36} />
        <span className="app-title">Constitution Platform</span>
      </div>
      <div className="navbar-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button className="logout-btn" onClick={onLogout}>
          Logout ({userRole?.toUpperCase()})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
