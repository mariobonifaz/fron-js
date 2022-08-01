import './App.css';
import { Routes, Route, Router , Link } from "react-router-dom";
import * as React from "react";
import LoginPages from './pages/LoginPages.js';
import RegisterPage from './pages/RegisterPage.js';
import RecoverPage from './pages/RecoverPage.js';
import ValidarPage from './pages/ValidarPage.js';
import ProductPages from './pages/ProductPage';
import WaitingPage from './pages/WaitingPage';
import RecPassPage from './pages/RecPassPage';
import Password from './pages/PasswordPage';
import ProducBody from './components/body/ProductBody.js'


function App() {
  return (
      <div className="app">

      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="registrar" element={<RegisterPage />} />
        <Route path="recuperar" element={<RecoverPage />} />  {/*aqui*/}
        <Route path="validar" element={<ValidarPage />} />
        <Route path="productos" element={<ProductPages />} />
        <Route path="waiting" element={<WaitingPage />} />
        <Route path="recupe" element={<RecPassPage />} />
        <Route path="recovery_password" element={<Password />} />
        <Route path="post" element={<ProducBody />} />
      </Routes>
      </div>
  );
}

export default App;
