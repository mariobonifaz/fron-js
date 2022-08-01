import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/navs/Login';
import Footer from './components/footers/Footer.js';
import LoginBody from './components/body/LoginBody.js';
import Header from './dashboard/Header';
import BodyCard from './dashboard/BodyCard.js';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

