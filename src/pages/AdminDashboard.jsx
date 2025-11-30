import React, { useState } from 'react';

const AdminDashboard = ({ isDarkMode, adminUsers, setAdminUsers, themeClass }) => {
  const [newUser, setNewUser] = useState({ name: '', role: 'educator', email: '', username: '', password: '' });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const user = { ...newUser, id: Date.now() };
      setAdminUsers(prev => [...prev, user]);
      setNewUser({ name: '', role: 'educator', email: '', username: '', password: '' });
      alert('User added successfully!');
    } else {
      alert('Please provide name and email.');
    }
  };

  const handleDeleteUser = (id) => {
    const ok = window.confirm('Remove this user?');
    if (!ok) return;
    setAdminUsers(prev => prev.filter(u => u.id !== id));
    alert('User removed.');
  };

  return (
    <div className={`dashboard ${themeClass}`}>
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="admin-stats">
        <div className={`stat-box ${themeClass}`}>
          <div className="stat-number">2,451</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className={`stat-box ${themeClass}`}>
          <div className="stat-number">124</div>
          <div className="stat-label">Educators</div>
        </div>
        <div className={`stat-box ${themeClass}`}>
          <div className="stat-number">2,150</div>
          <div className="stat-label">Citizens</div>
        </div>
        <div className={`stat-box ${themeClass}`}>
          <div className="stat-number">18</div>
          <div className="stat-label">Legal Experts</div>
        </div>
      </div>

      <div className={`content-card ${themeClass}`}>
        <h3>Add New User</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Enter user name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
            <option value="educator">Educator</option>
            <option value="citizen">Citizen</option>
            <option value="legal">Legal Expert</option>
          </select>
        </div>
        <div className="form-group">
          <label>Username (optional)</label>
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            placeholder="optional username"
          />
        </div>
        <div className="form-group">
          <label>Password (optional)</label>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            placeholder="optional password"
          />
        </div>
        <button className="btn-primary" onClick={handleAddUser}>Add User</button>
      </div>

      <h3 style={{ marginTop: '2rem', color: '#FF9933' }}>Registered Users ({adminUsers.length})</h3>
      <div className="content-grid">
        {adminUsers.length > 0 ? (
          adminUsers.map((user) => (
            <div key={user.id} className={`content-card ${themeClass}`}>
              <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{user.name}</span>
                <button className="btn--outline" onClick={() => handleDeleteUser(user.id)}>Remove</button>
              </h4>
              <p style={{ marginBottom: '0.25rem' }}>Email: {user.email}</p>
              <p style={{ marginBottom: '0.25rem' }}>Role: <strong>{user.role.toUpperCase()}</strong></p>
              {user.username && <p style={{ marginBottom: '0.25rem' }}>Username: {user.username}</p>}
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No users added yet. Add your first user above!</p>
        )}
      </div>

      <div className="content-grid" style={{ marginTop: '3rem' }}>
        <div className={`content-card ${themeClass}`}>
          <h3>📊 Platform Statistics</h3>
          <p>Monitor all constitutional content, user engagement, and platform health metrics.</p>
          <button className="btn-primary">View Analytics</button>
        </div>
        <div className={`content-card ${themeClass}`}>
          <h3>⚙️ Content Moderation</h3>
          <p>Review and approve educational content and updates from educators and experts.</p>
          <button className="btn-primary">Review Content</button>
        </div>
        <div className={`content-card ${themeClass}`}>
          <h3>📋 System Logs</h3>
          <p>View system logs and user activities for platform security and monitoring.</p>
          <button className="btn-primary">View Logs</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;