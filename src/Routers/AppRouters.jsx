import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Signup from "../Pages/Signup"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import ProfileManagement from "../Pages/ProfileManagement";
import ProfileDetail from "../Pages/ProfileDetail";
import Chat from "../Pages/Messaging";
import Subscription from "../Pages/Subscription";
import SearchMatchmaking from "../Pages/SearchMatchmaking";
import PaymentPage from "../Pages/PaymentPage";
import FaqPage from "../Pages/FaqPage";
import OurService from "../Pages/OurService";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsService from "../Pages/TermsService";



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
        <Route path= "/Dashboard" element = {<Dashboard/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
       

        <Route path = "/profilemanagement" element = {<ProfileManagement/>}/>
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/chat" element={<Chat/>}/>
         
         <Route path = "/subscription" element = {<Subscription/>}/>
         <Route path = "/searchmatchmaking" element ={<SearchMatchmaking />}/>
         <Route path = "/payment" element = {<PaymentPage />}/>


         <Route path="/OurService" element={<OurService />}  />
         <Route path="/payment" element={<PaymentPage />} />
         <Route path="/faqpage" element={<FaqPage/>} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
         <Route path ="/TermsService" element={<TermsService/>}/>


         {/* <Route path = "/supportchat" element ={<SupportChat />}/> */}




      </Routes>
    </MainLayout>

   
      {/* <Routes>   
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}


    </Router>
  );
}



export default AppRouter;