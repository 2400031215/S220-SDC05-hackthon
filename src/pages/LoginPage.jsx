import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ role, credentials, setCredentials, onLogin, onBack, themeClass }) => {
  return (
    <LoginForm
      role={role}
      credentials={credentials}
      setCredentials={setCredentials}
      onLogin={onLogin}
      onBack={onBack}
      themeClass={themeClass}
    />
  );
};

export default LoginPage;