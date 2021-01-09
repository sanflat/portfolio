import React from 'react';
import ReactDOM from 'react-dom';
import './Various.css';
import Header from './Header';
import Logo from './Logo';
import Wrapper from './Wrapper';
import About from './About';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <div className="base">
    <Header />
    <Logo />
    <Wrapper />
    <About />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
