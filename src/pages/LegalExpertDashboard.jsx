import React, { useState } from 'react';

const LegalExpertDashboard = ({ isDarkMode, lawUpdates, setLawUpdates, themeClass }) => {
  const [updateInput, setUpdateInput] = useState({ article: '', section: '', description: '' });

  const handleAddUpdate = () => {
    if (updateInput.article && updateInput.section && updateInput.description) {
      setLawUpdates([...lawUpdates, { 
        ...updateInput, 
        id: Date.now(), 
        date: new Date().toLocaleDateString() 
      }]);
      setUpdateInput({ article: '', section: '', description: '' });
      alert('Update submitted successfully!');
    }
  };

  const constitutionalArticles = [
    { id: 1, number: 'Article 14', title: 'Right to Equality', description: 'Equality before law and equal protection' },
    { id: 2, number: 'Article 19', title: 'Freedom of Speech', description: 'Right to freedom of expression' },
    { id: 3, number: 'Article 21', title: 'Right to Life', description: 'Protection of life and personal liberty' },
    { id: 4, number: 'Article 25', title: 'Right to Freedom of Religion', description: 'Freedom of conscience and profession' },
    { id: 5, number: 'Article 32', title: 'Right to Constitutional Remedies', description: 'Right to move Supreme Court' },
    { id: 6, number: 'Article 44', title: 'Uniform Civil Code', description: 'State shall endeavor to secure a uniform civil code' }
  ];

  return (
    <div className={`dashboard ${themeClass}`}>
      <h1 className="dashboard-title">Legal Expert Dashboard</h1>

      <div className={`law-update-form ${themeClass}`}>
        <h3>⚖️ Submit Constitutional Update</h3>
        <div className="form-group">
          <label>Article/Section</label>
          <input
            type="text"
            value={updateInput.article}
            onChange={(e) => setUpdateInput({ ...updateInput, article: e.target.value })}
            placeholder="e.g., Article 21"
          />
        </div>
        <div className="form-group">
          <label>Section Details</label>
          <input
            type="text"
            value={updateInput.section}
            onChange={(e) => setUpdateInput({ ...updateInput, section: e.target.value })}
            placeholder="e.g., Right to Life"
          />
        </div>
        <div className="form-group">
          <label>Description of Changes/Amendments</label>
          <textarea
            className="form-textarea"
            value={updateInput.description}
            onChange={(e) => setUpdateInput({ ...updateInput, description: e.target.value })}
            placeholder="Describe the legal changes or clarifications"
          />
        </div>
        <button className="btn-primary" onClick={handleAddUpdate}>Submit Update</button>
      </div>

      <h3 style={{ marginTop: '2rem', color: '#FF9933' }}>Recent Updates ({lawUpdates.length})</h3>
      <div className="content-grid">
        {lawUpdates.length > 0 ? (
          lawUpdates.map((update) => (
            <div key={update.id} className={`content-card ${themeClass}`}>
              <h4>{update.article} - {update.section}</h4>
              <p>{update.description}</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Updated: {update.date}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No updates submitted yet.</p>
        )}
      </div>

      <h3 style={{ marginTop: '2rem', color: '#FF9933' }}>Constitutional Articles Reference</h3>
      <div className="articles-list">
        {constitutionalArticles.map((article) => (
          <div key={article.id} className={`article-item ${themeClass}`}>
            <h4>{article.number}</h4>
            <h5>{article.title}</h5>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalExpertDashboard;