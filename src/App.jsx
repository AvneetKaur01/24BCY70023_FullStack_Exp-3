import React, { useState } from 'react';
import './App.css';
import ProductCards from './Experiment_3/Exp3_1/ProductCards';
import Books1 from './Experiment_3/Exp3_2/Books1';
import PersonClasses from './Experiment_3/Exp3_3/PersonClasses';

function App() {
  const [activeExperiment, setActiveExperiment] = useState('exp3_1');

  const renderExperiment = () => {
    switch (activeExperiment) {
      case 'exp3_1':
        return (
          <div className="experiment-content">
            <ProductCards />
          </div>
        );
      
      case 'exp3_2':
        return (
          <div className="experiment-content">
            <Books1 />
          </div>
        );
      
      case 'exp3_3':
        return (
          <div className="experiment-content">
            <PersonClasses />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-container">
          <h1 className="nav-title">React Experiments</h1>
          <div className="nav-buttons">
            <button
              className={`nav-btn ${activeExperiment === 'exp3_1' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_1')}
            >
              Exp 3.1: Product Cards
            </button>
            <button
              className={`nav-btn ${activeExperiment === 'exp3_2' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_2')}
            >
              Exp 3.2: Library Management
            </button>
            <button
              className={`nav-btn ${activeExperiment === 'exp3_3' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_3')}
            >
              Exp 3.3: Person Hierarchy
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {renderExperiment()}
      </main>

      <footer className="footer">
        <p>Full Stack Development - Experiment 3 | React Component Development</p>
      </footer>
    </div>
  );
}

export default App;