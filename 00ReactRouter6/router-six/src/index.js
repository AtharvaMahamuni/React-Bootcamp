import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn Component</h1>
      <h4>All courses are listed here</h4>
    </div>
  );
}

reportWebVitals();
