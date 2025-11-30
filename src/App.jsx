import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import EducatorDashboard from './pages/EducatorDashboard';
import CitizenDashboard from './pages/CitizenDashboard';
import LegalExpertDashboard from './pages/LegalExpertDashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userRole, setUserRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [adminUsers, setAdminUsers] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('adminUsers'));
      return saved && Array.isArray(saved) && saved.length > 0
        ? saved
        : [{ id: 1, name: 'Dev Admin', role: 'admin', email: 'dev@platform', username: '123', password: '123' }];
    } catch (e) {
      return [{ id: 1, name: 'Dev Admin', role: 'admin', email: 'dev@platform', username: '123', password: '123' }];
    }
  });

  const [educatorContent, setEducatorContent] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('educatorContent')) || [];
    } catch (e) {
      return [];
    }
  });

  const [quizzes, setQuizzes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('quizzes')) || [];
    } catch (e) {
      return [];
    }
  });

  const [lawUpdates, setLawUpdates] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lawUpdates')) || [];
    } catch (e) {
      return [];
    }
  });

  const [quizAttempts, setQuizAttempts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('quizAttempts')) || [];
    } catch (e) {
      return [];
    }
  });

  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setCurrentPage('login');
    setCredentials({ username: '', password: '' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert('Please provide username and password.');
      return;
    }

    // Admins (developers) must match saved admin credentials
    if (userRole === 'admin') {
      const match = adminUsers.find(u => u.username === credentials.username && u.password === credentials.password);
      if (!match) {
        alert('Admin credentials are incorrect. Use the developer admin account.');
        return;
      }
    }

    // For educator, citizen, legal: allow login (demo). In real app, integrate auth.
    setIsLoggedIn(true);
    setCurrentPage(`${userRole}-dashboard`);
    setCredentials({ username: '', password: '' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
    setUserRole(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // update data-color-scheme for CSS
    try {
      document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
    } catch (e) {}
  }, [isDarkMode]);

  useEffect(() => {
    // persist app data
    try {
      localStorage.setItem('adminUsers', JSON.stringify(adminUsers));
      localStorage.setItem('educatorContent', JSON.stringify(educatorContent));
      localStorage.setItem('quizzes', JSON.stringify(quizzes));
      localStorage.setItem('lawUpdates', JSON.stringify(lawUpdates));
      localStorage.setItem('quizAttempts', JSON.stringify(quizAttempts));
    } catch (e) {}
  }, [adminUsers, educatorContent, quizzes, lawUpdates, quizAttempts]);

  return (
    <div className={`app ${themeClass}`}>
      {isLoggedIn && (
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          userRole={userRole}
          onLogout={handleLogout}
          themeClass={themeClass}
        />
      )}

      {currentPage === 'landing' && !isLoggedIn && (
        <LandingPage onSelectRole={handleRoleSelect} themeClass={themeClass} />
      )}

      {currentPage === 'login' && !isLoggedIn && (
        <LoginPage 
          role={userRole} 
          credentials={credentials}
          setCredentials={setCredentials}
          onLogin={handleLogin}
          onBack={() => { setCurrentPage('landing'); setUserRole(null); }}
          themeClass={themeClass}
        />
      )}

      {currentPage === 'admin-dashboard' && isLoggedIn && (
        <AdminDashboard 
          isDarkMode={isDarkMode}
          adminUsers={adminUsers}
          setAdminUsers={setAdminUsers}
          themeClass={themeClass}
        />
      )}

      {currentPage === 'educator-dashboard' && isLoggedIn && (
        <EducatorDashboard 
          isDarkMode={isDarkMode}
          educatorContent={educatorContent}
          setEducatorContent={setEducatorContent}
          quizzes={quizzes}
          setQuizzes={setQuizzes}
          themeClass={themeClass}
        />
      )}

      {currentPage === 'citizen-dashboard' && isLoggedIn && (
        <CitizenDashboard 
          isDarkMode={isDarkMode}
          quizzes={quizzes}
          educatorContent={educatorContent}
          quizAttempts={quizAttempts}
          setQuizAttempts={setQuizAttempts}
          themeClass={themeClass}
        />
      )}

      {currentPage === 'legal-dashboard' && isLoggedIn && (
        <LegalExpertDashboard 
          isDarkMode={isDarkMode}
          lawUpdates={lawUpdates}
          setLawUpdates={setLawUpdates}
          themeClass={themeClass}
        />
      )}
    </div>
  );
}

export default App;