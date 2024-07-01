import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

// import Home from "./pages/Home";

// import Consulting from "./pages/Consulting";
// import Contactus from "./pages/Contactus";
// import Design from "./pages/Design";
// import Development from "./pages/Development";
// import Marketing from "./pages/Marketing";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
// import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <section
          className="website h-screen "
          >
            <Header/>
         
          {/* <Section/>
          <div className="flex flex-col justify-center text-center items-center h-3/4">
            <h2 className="text-black text-2xl font-medium ">My major Project</h2>
            <h1 className="md:text-5xl text-3xl text-black font-semibold py-5">
             These Are the Books for All ages
            </h1>
            <div className="text-xl">
            </div>
          </div>
          <Section/> */}
        </section>

       
      </Router>
    </>
  );
}

export default App;