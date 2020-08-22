import React from 'react';
import './App.css';
import PrintaBullLogo from './images/PrintaBull-Logo.png'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="printabull-logo" src={PrintaBullLogo} alt="PrintaBull logo"></img>
        <h1 className="welcome-h1">Welcome to PrintaBull</h1>
      </header>
      <body className="app-body">

      </body>
    </div>
  );
}

export default App;
