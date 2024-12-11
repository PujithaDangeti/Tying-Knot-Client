import React from "react";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/footer";
import Main from "../assets/Components/Main";
import LandingPage from "../assets/Components/Landing";


function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main/>
      <LandingPage/>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;