import React, { useState } from 'react';

const EducatorDashboard = ({ isDarkMode, educatorContent, setEducatorContent, quizzes = [], setQuizzes, themeClass }) => {
  const [quizInput, setQuizInput] = useState({ title: '', question: '', options: '', correct: '' });
  const [contentInput, setContentInput] = useState({ topic: '', content: '', articleNo: '' });

  const handleAddQuiz = () => {
    if (quizInput.title && quizInput.question && quizInput.options && quizInput.correct) {
      const newQuiz = {
        id: Date.now(),
        title: quizInput.title,
        question: quizInput.question,
        options: quizInput.options.split(',').map(o => o.trim()),
          correct: parseInt(quizInput.correct, 10)
      };
        setQuizzes(prev => [...prev, newQuiz]);
      setQuizInput({ title: '', question: '', options: '', correct: '' });
      alert('Quiz created successfully!');
    }
  };

  const handleAddContent = () => {
    if (contentInput.topic && contentInput.content && contentInput.articleNo) {
      const newContent = { ...contentInput, id: Date.now() };
      setEducatorContent(prev => [newContent, ...prev]);
      setContentInput({ topic: '', content: '', articleNo: '' });
      alert('Content added successfully!');
    }
  };

  const handleDeleteQuiz = (id) => {
    const ok = window.confirm('Are you sure you want to delete this quiz? This action cannot be undone.');
    if (!ok) return;
    setQuizzes(prev => prev.filter(q => q.id !== id));
    alert('Quiz removed.');
  };

  return (
    <div className={`dashboard ${themeClass}`}>
      <h1 className="dashboard-title">Educator Dashboard</h1>

      <div className={`content-card ${themeClass}`}>
        <h3>📝 Create New Quiz</h3>
        <div className="form-group">
          <label>Quiz Title</label>
          <input
            type="text"
            value={quizInput.title}
            onChange={(e) => setQuizInput({ ...quizInput, title: e.target.value })}
            placeholder="e.g., Fundamental Rights Quiz"
          />
        </div>
        <div className="form-group">
          <label>Question</label>
          <textarea
            className="form-textarea"
            value={quizInput.question}
            onChange={(e) => setQuizInput({ ...quizInput, question: e.target.value })}
            placeholder="Enter your quiz question"
          />
        </div>
        <div className="form-group">
          <label>Options (comma-separated)</label>
          <input
            type="text"
            value={quizInput.options}
            onChange={(e) => setQuizInput({ ...quizInput, options: e.target.value })}
            placeholder="Option 1, Option 2, Option 3, Option 4"
          />
        </div>
        <div className="form-group">
          <label>Correct Answer Index (0-3)</label>
          <input
            type="number"
            value={quizInput.correct}
            onChange={(e) => setQuizInput({ ...quizInput, correct: e.target.value })}
            placeholder="0"
            min="0"
            max="3"
          />
        </div>
        <button className="btn-primary" onClick={handleAddQuiz}>Create Quiz</button>
      </div>

      <div className={`content-card ${themeClass}`} style={{ marginTop: '2rem' }}>
        <h3>📚 Add Educational Content</h3>
        <div className="form-group">
          <label>Topic</label>
          <input
            type="text"
            value={contentInput.topic}
            onChange={(e) => setContentInput({ ...contentInput, topic: e.target.value })}
            placeholder="e.g., Right to Equality"
          />
        </div>
        <div className="form-group">
          <label>Article Number</label>
          <input
            type="text"
            value={contentInput.articleNo}
            onChange={(e) => setContentInput({ ...contentInput, articleNo: e.target.value })}
            placeholder="e.g., Article 14"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-textarea"
            value={contentInput.content}
            onChange={(e) => setContentInput({ ...contentInput, content: e.target.value })}
            placeholder="Enter educational content"
          />
        </div>
        <button className="btn-primary" onClick={handleAddContent}>Add Content</button>
      </div>

      <h3 style={{ marginTop: '2rem', color: '#FF9933' }}>Published Content ({educatorContent.length})</h3>
      <div className="content-grid">
        {educatorContent.length > 0 ? (
          educatorContent.map((item) => (
            <div key={item.id} className={`content-card ${themeClass}`}>
              <h4>{item.topic}</h4>
              <p><strong>{item.articleNo}</strong></p>
              <p>{item.content.substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No content published yet. Create your first lesson!</p>
        )}
      </div>

      <h3 style={{ marginTop: '2rem', color: '#138808' }}>Existing Quizzes ({quizzes.length})</h3>
      <div className="content-grid">
        {quizzes.length > 0 ? (
          quizzes.map((q) => (
            <div key={q.id} className={`content-card ${themeClass}`}>
              <h4>{q.title}</h4>
              <p style={{ fontSize: '0.95rem' }}>{q.question}</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Options: {q.options.join(' | ')}</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Correct: {q.options[q.correct]}</p>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                <button className="btn--outline" onClick={() => handleDeleteQuiz(q.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No quizzes created yet.</p>
        )}
      </div>
    </div>
  );
};

export default EducatorDashboard;