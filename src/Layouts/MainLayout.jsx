import React from "react";
import Header from "../Components/Header";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
//import LandingPage from "../Components/Landing";
import { useAuth } from "../context/AuthContext";
import Footer2 from "../Components/Footer2"

const MainLayout = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <>
      {isLoggedIn ? <Header1 onLogout={handleLogout} /> : <Header />}
      <main>{children}</main>
      
      {isLoggedIn ? <Footer2 onLogout={handleLogout} /> : <Footer />}
    </>
  );
};

export default MainLayout;

