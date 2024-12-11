import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.div`
  background-color: #f9f9f9;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: square;
  margin: 0;
  padding-left: 20px;
  font-size: 1.1rem;
  color: #34495e;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #2980b9;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>About TyingKnots</Title>
      
      <Section>
        <Paragraph>
          Welcome to <Highlight>TyingKnots</Highlight>, the ultimate destination for learning and mastering the art of tying knots. Whether you are a beginner or an expert, we provide step-by-step guides, tips, and tricks to help you tie a wide variety of knots for various purposes. From securing gear in the wilderness to sailing or even simple decorative knots, we’ve got you covered.
        </Paragraph>
      </Section>

      <Section>
        <Title>Why Knots Matter</Title>
        <Paragraph>
          Knots are essential tools in everyday life and in a multitude of professions. They allow us to secure items, create connections, and ensure safety in different environments. The right knot can make all the difference in a critical situation, whether you're hiking, sailing, climbing, or working on a DIY project.
        </Paragraph>
      </Section>

      <Section>
        <Title>Our Knot Library</Title>
        <Paragraph>
          At <Highlight>TyingKnots</Highlight>, we provide a vast library of knots that you can easily learn and master. Our collection includes:
        </Paragraph>
        <List>
          <ListItem><Highlight>Climbing Knots</Highlight> - Essential knots for climbers to stay safe on the rocks.</ListItem>
          <ListItem><Highlight>Sailing Knots</Highlight> - Perfect for sailors who need reliable knots for ropes and sails.</ListItem>
          <ListItem><Highlight>Camping Knots</Highlight> - Useful knots for setting up tents, securing gear, and making shelters.</ListItem>
          <ListItem><Highlight>Decorative Knots</Highlight> - Knots used for crafts and decorative purposes like keychains or bracelets.</ListItem>
        </List>
      </Section>

      <Section>
        <Title>Learn with Us</Title>
        <Paragraph>
          We believe that learning to tie knots should be fun and informative. Our easy-to-follow guides, videos, and tutorials will help you develop the skills needed to tie any knot with confidence. No matter your skill level, our step-by-step instructions will make the learning process enjoyable.
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;
