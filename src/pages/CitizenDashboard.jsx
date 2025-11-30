import React, { useState, useMemo } from 'react';

const CitizenDashboard = ({ isDarkMode, quizzes, educatorContent, quizAttempts, setQuizAttempts, themeClass }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (quizId, optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [quizId]: optionIndex });
  };

  const stats = useMemo(() => {
    const latest = {};
    (quizAttempts || []).forEach(a => { latest[a.quizId] = a; });
    const attempted = Object.keys(latest).length;
    const correct = Object.values(latest).filter(a => a.isCorrect).length;
    const total = quizzes.length || 0;
    return { attempted, correct, total };
  }, [quizAttempts, quizzes]);

  return (
    <div className={`dashboard ${themeClass}`}>
      <h1 className="dashboard-title">Learn & Practice</h1>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="stat-box" style={{ padding: '0.5rem 1rem' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.attempted}</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Quizzes Attempted</div>
        </div>
        <div className="stat-box" style={{ padding: '0.5rem 1rem' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#22c55e' }}>{stats.correct}</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Correct Answers</div>
        </div>
        <div className="stat-box" style={{ padding: '0.5rem 1rem' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.total}</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Available Quizzes</div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#FF9933', marginBottom: '1.5rem' }}>📚 Educational Resources</h2>
        <div className="content-grid">
          {educatorContent.length > 0 ? (
            educatorContent.map((content) => (
              <div key={content.id} className={`content-card ${themeClass}`}>
                <h3>{content.topic}</h3>
                <p style={{ color: '#FF9933', fontWeight: 'bold' }}>{content.articleNo}</p>
                <p>{content.content}</p>
                <button className="btn-primary">Read More</button>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1' }}>No educational content available yet. Check back soon!</p>
          )}
        </div>
      </div>

      <div>
        <h2 style={{ color: '#FF9933', marginBottom: '1.5rem' }}>❓ Available Quizzes</h2>
        <div>
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => (
              <div key={quiz.id} className={`quiz-card ${themeClass}`}>
                <h3 className="quiz-title">{quiz.title}</h3>
                <p><strong>Question:</strong> {quiz.question}</p>
                <div style={{ marginTop: '1rem' }}>
                  {quiz.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`quiz-option ${themeClass} ${selectedAnswers[quiz.id] === idx ? 'selected' : ''}`}
                      onClick={() => handleSelectAnswer(quiz.id, idx)}
                    >
                      <input 
                        type="radio" 
                        name={`quiz-${quiz.id}`} 
                        checked={selectedAnswers[quiz.id] === idx} 
                        readOnly 
                      />
                      {option}
                    </div>
                  ))}
                </div>
                <button
                  className="btn-primary"
                  onClick={() => {
                    const selectedIndex = typeof selectedAnswers[quiz.id] === 'number' ? selectedAnswers[quiz.id] : null;
                    const selected = selectedIndex !== null ? quiz.options[selectedIndex] : null;
                    const isCorrect = selectedIndex === quiz.correct;

                    // record attempt
                    const attempt = {
                      quizId: quiz.id,
                      selectedIndex,
                      isCorrect,
                      date: new Date().toISOString()
                    };
                    setQuizAttempts(prev => [...prev, attempt]);

                    alert(`Selected: ${selected || 'None'}\n${isCorrect ? '✓ Correct!' : '✗ Incorrect'}`);
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  Submit Answer
                </button>
              </div>
            ))
          ) : (
            <p>No quizzes available yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;