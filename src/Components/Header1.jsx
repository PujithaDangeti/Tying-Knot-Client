// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const HeaderContainer = styled.header`
//   background-color: #ff7f50;
//   padding: 15px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.h1`
//   color: white;
//   font-size: 1.8em;
//   margin: 0;
// `;
// const NavLinks = styled.nav`
//   display: flex;
//   gap: 50px;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1em;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Header1 = () => {
//   return (
//     <HeaderContainer>
//       <Logo>TyingKnots</Logo>
//       <NavLinks>
      
//       <NavLink to="/profilemanagement">ProfileManagement</NavLink>
//       <NavLink to="/searchmatchmaking">SearchMatchmaking</NavLink>
//        <NavLink to="/chat">Chat</NavLink>
//        {/* <NavLink to="/notifications">Notifications</NavLink>  */}
//       <NavLink to="/subscription">Subscription</NavLink>
//       {/* <NavLink to="/wishlist">Favourites</NavLink> */}

//         {/* <NavLink to="/">Profiles</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contact">Contact</NavLink> */}
//         {/* <NavLink to="/logout">Logout</NavLink> */}
//       </NavLinks>
//     </HeaderContainer>
//   );
// };

// export default Header1;




// import React from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";

// const HeaderContainer = styled.header`
//   background-color: #ff7f50;
//   padding: 15px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.h1`
//   color: white;
//   font-size: 1.8em;
//   margin: 0;
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   gap: 50px;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1em;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const LogoutButton = styled.button`
//   background: transparent;
//   color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 1em;
//   margin-left: 20px;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Header1 = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout(); // Clear authentication state
//     }
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <HeaderContainer>
//       <Logo>TyingKnots</Logo>
//       <NavLinks>
//         <NavLink to="/profilemanagement">ProfileManagement</NavLink>
//         <NavLink to="/searchmatchmaking">SearchMatchmaking</NavLink>
//         <NavLink to="/chat">Chat</NavLink>
//         <NavLink to="/subscription">Subscription</NavLink>
//         <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//       </NavLinks>
//     </HeaderContainer>
//   );
// };

// export default Header1;



import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #ff7f50;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.8em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    background-color: #ff7f50;
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 8px;
    z-index: 10;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 10px 0;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
`;

const Header1 = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Clear authentication state
    }
    navigate("/login"); // Redirect to login page
  };

  return (
    <HeaderContainer>
      <Logo>TyingKnots</Logo>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/profilemanagement">Profile Management</NavLink>
        <NavLink to="/searchmatchmaking">Search Matchmaking</NavLink>
        {/* <NavLink to="/chat">Chat</NavLink> */}
        <NavLink to="/subscription">Subscription</NavLink>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header1;
