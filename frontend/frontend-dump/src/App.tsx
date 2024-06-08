import React from 'react';
import logo from './logo.svg';
import './App.css';
//
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// import "preline/preline";
// import { IStaticMethods } from "preline/preline";
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }


function App() {
  // const location = useLocation();

// useEffect(() => {
//     window.HSStaticMethods.autoInit();
// }, [location.pathname]);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            ....
          </p>
          <a
              className="App-link"
              href="https://github.com/provectus/kafka-ui"
              target="_blank"
              rel="noopener noreferrer"
          >
            LCT2421 | QxP | Robotics
          </a>
        </header>
        <script src={"./node_modules/preline/dist/preline.js"}></script>
      </div>
  );
}

export default App;
