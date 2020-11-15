import React, { useState } from 'react';
import './App.css';
import PrintaBullLogo from './images/PrintaBull-Logo.png'
import InvertedPrintaBullLogo from './images/inverted-PrintaBull-logo.png'
import DangerousBull from './images/dangerous-black-bull.jpg'
import Printer from './images/black-printer.jpg'

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false)

  const switchModes = (mode) => {
    if (mode === "light") {
      setIsDarkModeActive(false)
    } else if (mode === "dark") {
      setIsDarkModeActive(true)
    }
  }

  return (
    <div className={isDarkModeActive ? "app dark-app" : "app"}>
      <header className={isDarkModeActive ? "app-header dark-header" : "app-header"}>
        <div className={isDarkModeActive ? "toggle-dark" : "toggle-light"}>
          <h4 className="light-mode" onClick={() => switchModes("light")}>
            Light
          </h4>
          <h4 className="dark-mode" onClick={() => switchModes("dark")}>
            Dark
          </h4>
        </div>
        <img className="printabull-logo"
          src={isDarkModeActive ? InvertedPrintaBullLogo : PrintaBullLogo}
          alt="PrintaBull logo">
        </img>
        <h1 className={
          isDarkModeActive ?
            "welcome-h1 dark-title" :
            "welcome-h1"
          }
        >
          Welcome to PrintaBull
        </h1>
        <button className={
          isDarkModeActive ?
            "print-button dark-button" :
            "print-button"
          }
          onClick={() => window.print()
          }
        >
          PRINT PAGE
        </button>
      </header>
      <main className="app-main">
        <section className="bull-section">
          <img className="bull-img"
            src={DangerousBull}
            alt="dangerous bull">
          </img>
          <div className="bull-div">
            <h2>Here's a load of bull</h2>
            <p>Lorem ipsum bull sit amet, consectetur adipiscing bull.
            Aliquam nulla eros, viverra ac bull varius, posuere
            ultrices bull. Aliquam et bull justo. Morbi hendrerit
            bull neque in pellentesque. Maecenas consectetur sed dolor
            vel volutpat. Bull augue erat, malesuada bull lectus sit amet,
            cursus sodales tellus. Phasellus eget fermentum dui. Nunc
            interdum, bull vel maximus venenatis, odio bull venenatis
            massa, ut pharetra bull neque ut neque. Proin a elit lectus.
            Aenean luctus ut bull in convallis. Sed rhoncus libero bull
            sem fringilla rhoncus.
            </p>
          </div>
        </section>
        <section className="printer-section">
          <div className="printer-div">
            <h2>Get your printer info here</h2>
            <p>Lorem ipsum printer sit amet, consectetur adipiscing printer.
            Aliquam nulla eros, viverra ac odio printer, posuere ultrices
            enim. Printer et nibh justo. Morbi hendrerit non printer in
            pellentesque. Maecenas consectetur sed printer vel volutpat.
            Donec augue erat, malesuada quis printer sit amet, cursus sodales
            printer. Phasellus eget fermentum dui. Printer interdum, nulla
            vel maximus printer, odio orci venenatis massa, ut printer orci
            neque ut neque. Proin a elit lectus. Printer luctus ut diam in
            convallis. Sed rhoncus printer sed sem fringilla rhoncus.
            </p>
          </div>
          <img className="printer-img" src={Printer} alt="printer"></img>
        </section>
      </main>
    </div>
  );
}

export default App;
