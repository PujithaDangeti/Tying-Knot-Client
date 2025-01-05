// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { useAuth } from "../context/AuthContext";
// import bgImage from "../assets/bgImage.jpg";

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const DashboardContainer = styled.div`
//   height: 100vh;
//   background: url(${bgImage}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-align: center;
//   position: relative;
// `;

// const WelcomeMessage = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
//   animation: ${fadeIn} 1s ease-out;
// `;

// const SubText = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 300;
//   margin-bottom: 2rem;
//   animation: ${fadeIn} 1.5s ease-out;
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   top: 0;
//   left: ${(props) => (props.open ? "0" : "-310px")}; /* Slide-in from the left */
//   width: 250px;
//   height: 100%;
//   background-color: #333;
//   padding: 2rem;
//   color: white;
//   transition: left 0.3s ease-in-out;
//   z-index: 100;
// `;

// const SidebarLink = styled(NavLink)`
//   display: block;
//   margin: 1rem 0;
//   color: white;
//   text-decoration: none;
//   font-size: 1.2rem;

//   &:hover {
//     text-decoration: underline;
//     color: #ff9800;
//   }
// `;

// const HamburgerMenu = styled.div`
//   position: absolute;
//   top: 1rem;
//   right: 1rem; /* Positioned on the right */
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;

//   div {
//     width: 30px;
//     height: 4px;
//     background-color: white;
//     border-radius: 10px;
//   }
// `;

// const Dashboard = () => {
//   const { setIsLoggedIn } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userEmail = location.state?.email || "User";

//   useEffect(() => {
//     if (!location.state?.email) {
//       navigate("/login");
//     }
//   }, [location, navigate]);

//   const handleToggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Sidebar */}
//       <Sidebar open={menuOpen}>
//         <SidebarLink to="/profile">My Profile</SidebarLink>
//         <SidebarLink to="/supportchat">SupportChat</SidebarLink> 
//          {/* <SidebarLink to="/settings">Settings</SidebarLink> */}
//         <button
//           onClick={handleLogout}
//           style={{
//             background: "transparent",
//             color: "white",
//             border: "none",
//             textAlign: "left",
//             cursor: "pointer",
//             marginTop: "2rem",
//             fontSize: "1.2rem",
//           }}
//         >
//           Logout
//         </button>
//       </Sidebar>

//       {/* Main Dashboard */}
//       <DashboardContainer>
//         {/* Hamburger Menu */}
//         <HamburgerMenu onClick={handleToggleMenu}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </HamburgerMenu>

//         {/* Centered Welcome Message */}
//         <div>
//           <WelcomeMessage>Welcome to Tyingnots, {userEmail}!</WelcomeMessage>
//           <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
//         </div>
//       </DashboardContainer>
//     </>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { useAuth } from "../context/AuthContext";
// import bgImage from "../assets/bgImage.jpg";

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const DashboardContainer = styled.div`
//   height: 100vh;
//   background: url(${bgImage}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-align: center;
//   position: relative;
// `;

// const WelcomeMessage = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
//   animation: ${fadeIn} 1s ease-out;
// `;

// const SubText = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 300;
//   margin-bottom: 2rem;
//   animation: ${fadeIn} 1.5s ease-out;
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   top: 0;
//   left: ${(props) => (props.open ? "0" : "-310px")}; /* Slide-in from the left */
//   width: 250px;
//   height: 100%;
//   background-color: #333;
//   padding: 2rem;
//   color: white;
//   transition: left 0.3s ease-in-out;
//   z-index: 100;
// `;

// const SidebarLink = styled(NavLink)`
//   display: block;
//   margin: 1rem 0;
//   color: white;
//   text-decoration: none;
//   font-size: 1.2rem;

//   &:hover {
//     text-decoration: underline;
//     color: #ff9800;
//   }
// `;

// const HamburgerMenu = styled.div`
//   position: absolute;
//   top: 1rem;
//   right: 1rem; /* Positioned on the right */
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;

//   div {
//     width: 30px;
//     height: 4px;
//     background-color: white;
//     border-radius: 10px;
//   }
// `;

// const Dashboard = () => {
//   const { setIsLoggedIn } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userEmail = location.state?.email || "User";

//   useEffect(() => {
//     if (!location.state?.email) {
//       navigate("/login");
//     }
//   }, [location, navigate]);

//   const handleToggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Sidebar */}
//       <Sidebar open={menuOpen}>
//         <SidebarLink to="/profile">My Profile</SidebarLink>
//         {/* <SidebarLink to="/supportchat">SupportChat</SidebarLink>  */}
//          {/* <SidebarLink to="/settings">Settings</SidebarLink> */}
//       </Sidebar>

//       {/* Main Dashboard */}
//       <DashboardContainer>
//         {/* Hamburger Menu */}
//         <HamburgerMenu onClick={handleToggleMenu}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </HamburgerMenu>

//         {/* Centered Welcome Message */}
//         <div>
//           <WelcomeMessage>Welcome to Tyingnots, {userEmail}!</WelcomeMessage>
//           <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
//         </div>
//       </DashboardContainer>
//     </>
//   );
// };

// export default Dashboard;


//testing


import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Dashboard = () => {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const userEmail = location.state?.email || "User";

  useEffect(() => {
    if (!location.state?.email) {
      navigate("/login");
    }
  }, [location, navigate]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <DashboardContainer>
      <div>
        <WelcomeMessage>Welcome to TyingKnots, {userEmail}!</WelcomeMessage>
        <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
