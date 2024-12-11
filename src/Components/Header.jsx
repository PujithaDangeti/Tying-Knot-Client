import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #ff7f50;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.8em;
  margin: 0;
`;
const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>TyingKnots</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/loginform">LoginForm</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
