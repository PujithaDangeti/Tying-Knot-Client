// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const HeaderContainer = styled.header`
//   background-color: #ff7f50;
//   padding: 15px 20px;
//   display: flex;
//   // margin : -15px;
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

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <Logo>TyingKnots</Logo>
//       <NavLinks>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/signup">Signup</NavLink>
//         <NavLink to="/login">Login</NavLink>

        
//         <NavLink to="/contact">Contact</NavLink>

        

//       </NavLinks>
//     </HeaderContainer>
//   );
// };

// export default Header;





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

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <Logo>TyingKnots</Logo>
//       <NavLinks>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/signup">Signup</NavLink>
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </NavLinks>
//     </HeaderContainer>
//   );
// };

// export default Header;


import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color:rgb(0, 0, 0);
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
  gap: 50px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #ff7f50;
    width: 200px;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
