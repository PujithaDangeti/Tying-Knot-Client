import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout
 from "../Layouts/MainLayout";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Signup from "../Pages/Signup"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login";

const AppRouter = () => {
  return (
    <Router>
    
    <MainLayout>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact" element={<Contact />} /> 


      </Routes>
    </MainLayout>
    </Router>
  );
};

export default AppRouter;