// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "../Layouts/MainLayout";
// import Home from "../Pages/Home"
// import About from "../Pages/About"
// import Signup from "../Pages/Signup"
// import Contact from "../Pages/Contact"
// import Login from "../Pages/Login";
// import Dashboard from "../Pages/Dashboard";
// import Profile from "../Pages/Profile";
// import ProfileManagement from "../Pages/ProfileManagement";
// import ProfileDetail from "../Pages/ProfileDetail";
// import Chat from "../Pages/Messaging";
// import Subscription from "../Pages/Subscription";
// import SearchMatchmaking from "../Pages/SearchMatchmaking";
// import PaymentPage from "../Pages/PaymentPage";
// import FaqPage from "../Pages/FaqPage";
// import OurService from "../Pages/OurService";
// import PrivacyPolicy from "../Pages/PrivacyPolicy";
// import TermsService from "../Pages/TermsService";




// const AppRouter = () => {
//   return (
//     <Router>
    
//     <MainLayout>
//       <Routes>

//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contact" element={<Contact />} /> 
//         <Route path= "/Dashboard" element = {<Dashboard/>}/>
//         <Route path = "/profile" element = {<Profile/>}/>
       

//         <Route path = "/profilemanagement" element = {<ProfileManagement/>}/>
//         <Route path="/profile/:id" element={<ProfileDetail />} />
//         <Route path="/chat" element={<Chat/>}/>
         
//          <Route path = "/subscription" element = {<Subscription/>}/>
//          <Route path = "/searchmatchmaking" element ={<SearchMatchmaking />}/>
//          <Route path = "/payment" element = {<PaymentPage />}/>


//          <Route path="/OurService" element={<OurService />}  />
//          <Route path="/payment" element={<PaymentPage />} />
//          <Route path="/faqpage" element={<FaqPage/>} />
//          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
//          <Route path ="/TermsService" element={<TermsService/>}/>


// //          {/* <Route path = "/supportchat" element ={<SupportChat />}/> */}




//     </Routes>
//   </MainLayout>

   
// //       {/* <Routes>   
// //         <Route path="/" element={<LoginForm />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //       </Routes> */}


//      </Router>
//  );
//  }
// export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
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

import ProtectedRoute from "../Components/ProtectedRoute"; // Import the ProtectedRoute


const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          

          

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profilemanagement"
            element={
              <ProtectedRoute>
                <ProfileManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <ProfileDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subscription"
            element={
              <ProtectedRoute>
                <Subscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/searchmatchmaking"
            element={
              <ProtectedRoute>
                <SearchMatchmaking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />

          <Route path="/ourservice" element={<OurService />} />
          <Route path="/faqpage" element={<FaqPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsservice" element={<TermsService />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;

