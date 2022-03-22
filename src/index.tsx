import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

(function(){
    var originallog = console.log;
    console.log = function(txt) {
        // Do really interesting stuff
        originallog(`[log override] ${txt}`);
    }
})();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
