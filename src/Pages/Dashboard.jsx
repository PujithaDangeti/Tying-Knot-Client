// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const DashboardContainer = styled.div`
//   padding: 2rem;
//   background-color: #f8f9fa;
//   height: 100vh;
// `;

// const WelcomeMessage = styled.h2`
//   color: #333;
//   text-align: center;
// `;

// const HamburgerMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 30px;
//   height: 25px;
//   cursor: pointer;
//   z-index: 100;
//   margin-top: 1rem;
// `;

// const HamburgerLine = styled.div`
//   height: 4px;
//   width: 100%;
//   background-color: #333;
//   border-radius: 10px;
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 250px;
//   height: 100%;
//   background-color: #333;
//   color: white;
//   padding: 2rem;
//   display: ${(props) => (props.open ? 'block' : 'none')};
//   transition: transform 0.3s ease-in-out;
//   z-index: 50;
// `;

// const SidebarLink = styled(NavLink)`
//   display: block;
//   padding: 1rem;
//   color: white;
//   text-decoration: none;
//   margin: 1rem 0;
//   &:hover {
//     background-color: #444;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const DashboardButton = styled.button`
//   margin: 0 10px;
//   padding: 0.8rem 1.5rem;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Dashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userEmail = location.state?.email || 'User';

//   useEffect(() => {
//     if (!location.state?.email) {
//       navigate('/login');
//     }
//   }, [location, navigate]);

//   const handleToggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     // Clear any stored user data (optional)
//     localStorage.clear();
//     sessionStorage.clear();

//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <DashboardContainer>
//       <HamburgerMenu onClick={handleToggleMenu}>
//         <HamburgerLine />
//         <HamburgerLine />
//         <HamburgerLine />
//       </HamburgerMenu>

//       <Sidebar open={menuOpen}>
//         <SidebarLink to="/profile">Profile</SidebarLink>
//         <SidebarLink to="/subscription">Subscription</SidebarLink>
//         <SidebarLink to="/settings">Settings</SidebarLink>
//         <button
//           onClick={handleLogout}
//           style={{
//             background: 'transparent',
//             color: 'white',
//             border: 'none',
//             textAlign: 'left',
//             cursor: 'pointer',
//             padding: '1rem',
//             width: '100%',
//           }}
//         >
//           Logout
//         </button>
//       </Sidebar>

//       <WelcomeMessage>Welcome to Tyingnots</WelcomeMessage>
//       <h3 style={{ textAlign: 'center' }}>
//         "Find Your Perfect Match, Start Your Forever Today!"
//       </h3>

//       <ButtonContainer>
//         <DashboardButton onClick={() => navigate('/profile')}>
//           Profile
//         </DashboardButton>
//         <DashboardButton onClick={() => navigate('/subscription')}>
//           Subscription
//         </DashboardButton>
//         <DashboardButton onClick={() => navigate('/settings')}>
//           Settings
//         </DashboardButton>
//       </ButtonContainer>
//     </DashboardContainer>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { setIsLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Reset login state
//     navigate("/login");
//   };

//   return (
//     <>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../context/AuthContext";
import bgImage from "../assets/bgImage.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DashboardContainer = styled.div`
  height: 100vh;
  background: url(${bgImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

const SubText = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-310px")}; /* Slide-in from the left */
  width: 250px;
  height: 100%;
  background-color: #333;
  padding: 2rem;
  color: white;
  transition: left 0.3s ease-in-out;
  z-index: 100;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  margin: 1rem 0;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    color: #ff9800;
  }
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem; /* Positioned on the right */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 10px;
  }
`;

const Dashboard = () => {
  const { setIsLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userEmail = location.state?.email || "User";

  useEffect(() => {
    if (!location.state?.email) {
      navigate("/login");
    }
  }, [location, navigate]);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar open={menuOpen}>
        <SidebarLink to="/profile">My Profile</SidebarLink>
        <SidebarLink to="/supportchat">SupportChat</SidebarLink> 
         <SidebarLink to="/settings">Settings</SidebarLink>
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            textAlign: "left",
            cursor: "pointer",
            marginTop: "2rem",
            fontSize: "1.2rem",
          }}
        >
          Logout
        </button>
      </Sidebar>

      {/* Main Dashboard */}
      <DashboardContainer>
        {/* Hamburger Menu */}
        <HamburgerMenu onClick={handleToggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerMenu>

        {/* Centered Welcome Message */}
        <div>
          <WelcomeMessage>Welcome to Tyingnots, {userEmail}!</WelcomeMessage>
          <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

