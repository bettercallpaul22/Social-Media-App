import React from "react";
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";



const App = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/signup" element={<Auth />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
