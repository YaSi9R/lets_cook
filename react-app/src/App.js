import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginSignupPage from './components/LoginSignupPage';

function Main() {
  const location = useLocation();
  const isLoginSignupPage = location.pathname === '/login-signup';

  return (
    <>
      {!isLoginSignupPage &&
      <>
       <Header />
       <Section/>
       </>
       }
      
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



function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}


export default App;
