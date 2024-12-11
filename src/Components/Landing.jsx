import React from 'react'
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background-color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

const StatItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  
  &:hover {
    background-color: #007bff; /* Change background color on hover */
    transform: scale(1.05); /* Slightly scale the item */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Enhance shadow effect */
  }
`;

const StatValue = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin: 0;
  
  ${StatItem}:hover & {
    color: white; /* Change text color on hover */
  }
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
  
  ${StatItem}:hover & {
    color: white; /* Change label color on hover */
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Content>
        <Statistics>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Mobile-verified profiles</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>1 Lakhs+</StatValue>
            <StatLabel>Customers served</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>2 Years</StatValue>
            <StatLabel>of successful matchmaking</StatLabel>
          </StatItem>
        </Statistics>
      </Content>
    </Container>
    );
};
    
    export default LandingPage;