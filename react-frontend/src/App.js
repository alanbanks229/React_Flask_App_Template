import React from 'react';
import logo from './logo.svg';
import './App.css';
// Whenever you want to run the updated html just do
// npm run build
// drawbacks no hot reload, of built in debug server

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My Token = {window.token}</p>
      </header>
    </div>
  );
}

export default App;
