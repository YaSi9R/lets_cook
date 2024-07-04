import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginSignupPage from './components/LoginSignupPage';


function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const isLoginSignupPage = location.pathname === '/login-signup';

  return (
    <>
      {!isLoginSignupPage && <Header />}
      <section className="website h-screen">
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </section>
    </>
  );
}

export default App;
