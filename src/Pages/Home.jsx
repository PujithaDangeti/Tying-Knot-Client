import React from "react";
import styled from "styled-components";
import image1 from "../assets/pic7.jpg"

// Styled component for the header
const HeaderContainer = styled.header`
  background-image: url(${image1}); /* Replace with your image URL */
  background-size: cover;
  
  background-position: center;
  text-align: center;
  color: white;
  padding: 200px 20px;
  
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeaderSubtitle = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Welcome to TyingKnots</HeaderTitle>
      <HeaderSubtitle>
        "Where Connections Blossom, and Dreams Begin"
      </HeaderSubtitle>
      <Tagline>"Explore. Connect. Celebrate."</Tagline>
      <Tagline>"Let’s Tie the Knot Together!"</Tagline>
    </HeaderContainer>
  );
};

export default HomePage;
