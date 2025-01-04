// import React from "react";
// import styled from "styled-components";
// import image1 from "../assets/pic7.jpg"

// // Styled component for the header
// const HeaderContainer = styled.header`
//   background-image: url(${image1}); /* Replace with your image URL */
//   background-size: cover;
  
//   background-position: center;
//   text-align: center;
//   color: white;
//   padding: 200px 20px;
  
// `;

// const HeaderTitle = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 20px;
// `;

// const HeaderSubtitle = styled.h2`
//   font-size: 1.5rem;
//   font-style: italic;
//   font-weight: bold;
//   text-decoration: underline;
// `;

// const Tagline = styled.p`
//   font-size: 1.2rem;
//   margin-top: 20px;
//   font-weight: bold;
// `;

// const HomePage = () => {
//   return (
//     <HeaderContainer>
//       <HeaderTitle>Welcome to TyingKnots</HeaderTitle>
//       <HeaderSubtitle>
//         "Where Connections Blossom, and Dreams Begin"
//       </HeaderSubtitle>
//       <Tagline>"Explore. Connect. Celebrate."</Tagline>
//       <Tagline>"Let’s Tie the Knot Together!"</Tagline>
//     </HeaderContainer>
//   );
// };

// export default HomePage;



import React from "react";
import styled, { keyframes } from "styled-components";
import image1 from "../assets/pic7.jpg"; // Replace with your header image path

// Keyframes for sliding animation
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components for Header
const HeaderContainer = styled.header`
  background-image: url(${image1});
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

// Styled Components for Landing Page
const Container = styled.div`
  background-color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 1000px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: row; /* Ensure row layout */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  justify-content: center; /* Center the items */
  gap: 20px; /* Space between items */
`;

const StatItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(50px); /* Initial position for sliding */
  animation: ${slideIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    background-color: #ff7f50;
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StatValue = styled.h2`
  font-size: 2rem;
  color: #ff7f50;
  margin: 0;

  ${StatItem}:hover & {
    color: white;
  }
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;

  ${StatItem}:hover & {
    color: white;
  }
`;

const HomePage = () => {
  const stats = [
    { value: "100%", label: "Mobile-verified profiles" },
    { value: "1 Lakhs+", label: "Customers served" },
    { value: "2 Years", label: "of successful matchmaking" },
    { value: "500+", label: "Partnership events" },
    { value: "4.8/5", label: "Customer satisfaction rating" },
  ];

  return (
    <>
      {/* Header Section */}
      <HeaderContainer>
        <HeaderTitle>Welcome to TyingKnots</HeaderTitle>
        <HeaderSubtitle>"Where Connections Blossom, and Dreams Begin"</HeaderSubtitle>
        <Tagline>"Explore. Connect. Celebrate."</Tagline>
        <Tagline>"Let’s Tie the Knot Together!"</Tagline>
      </HeaderContainer>

      {/* Achievements Section */}
      <Container>
        <Content>
          <Title>Our Achievements</Title>
          <Statistics>
            {stats.map((stat, index) => (
              <StatItem key={index} delay={index * 0.2}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </Statistics>
        </Content>
      </Container>
    </>
  );
};

export default HomePage;