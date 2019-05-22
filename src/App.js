import React from 'react';
import logo from './assets/logo.jpeg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Lê Quang Sang
        </h3>
        <p className="App-content">
        I’m passion about technologies, and one most of aspects is problem-solving. I love learning new things and facing interesting challenges.
        </p>
      </header>
    </div>
  );
}

export default App;
