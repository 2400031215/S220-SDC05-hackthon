import React from 'react';

const RoleCard = ({ icon, name, description, onClick, themeClass }) => {
  return (
    <div className={`role-card ${themeClass}`} onClick={onClick}>
      <div className="role-icon">{icon}</div>
      <div className="role-name">{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default RoleCard;