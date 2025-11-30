import React from 'react';
import AshokaChakra from '../components/AshokaChakra';
import RoleCard from '../components/RoleCard';

const LandingPage = ({ onSelectRole, themeClass }) => {
  const roles = [
    {
      id: 'admin',
      icon: '👨‍💼',
      name: 'Admin',
      description: 'Manage platform content and users'
    },
    {
      id: 'educator',
      icon: '👨‍🏫',
      name: 'Educator',
      description: 'Create quizzes and educational content'
    },
    {
      id: 'citizen',
      icon: '👤',
      name: 'Citizen',
      description: 'Learn and attempt quizzes'
    },
    {
      id: 'legal',
      icon: '⚖️',
      name: 'Legal Expert',
      description: 'Update constitutional articles'
    }
  ];

  return (
    <div className={`landing-page ${themeClass}`}>
      {/* Background decorative spinner */}
      <div className="landing-bg" aria-hidden="true">
        <AshokaChakra className="ashoka-chakra--bg" size="80vmin" />
      </div>
      <div className="hero-section hero-content">
        <h1>Indian Constitution Platform</h1>
        <p>Understand, Learn, and Promote Awareness of the Indian Constitution</p>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>
          Select your role to get started and contribute to constitutional awareness
        </p>
      </div>

      <div className="role-selection">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            icon={role.icon}
            name={role.name}
            description={role.description}
            onClick={() => onSelectRole(role.id)}
            themeClass={themeClass}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;