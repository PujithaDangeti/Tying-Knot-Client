import React from "react";
import Header from "../Components/Header";
import Header1 from "../Components/Header1";
import footer from "../Components/footer"
import LandingPage from "../Components/Landing";
import { useAuth } from "../context/AuthContext"; // Import useAuth

function MainLayout({ children }) {
  const { isLoggedIn } = useAuth(); // Access login state

  return (
    <>
      {isLoggedIn ? <Header1 /> : <Header />}
      <main>{children}</main>
      <LandingPage />
      <footer />
    </>
  );
}

export default MainLayout;
