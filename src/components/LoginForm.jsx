import React from 'react';

const LoginForm = ({ role, credentials, setCredentials, onLogin, onBack, themeClass }) => {
  const roleNames = {
    admin: 'Admin',
    educator: 'Educator',
    citizen: 'Citizen',
    legal: 'Legal Expert'
  };

  return (
    <div className={`login-page ${themeClass}`}>
      <div className={`login-container ${themeClass}`}>
        <h2 className="login-title">{roleNames[role]} Login</h2>
        <form onSubmit={onLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div onClick={onBack} className="back-btn">← Back to Roles</div>
      </div>
    </div>
  );
};

export default LoginForm;