import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin: 0.8rem 0;
`;

const FeaturesList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`;

const Feature = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(0); }
  25% { transform: translateX(-100%); }
  45% { transform: translateX(-100%); }
  50% { transform: translateX(-200%); }
  70% { transform: translateX(-200%); }
  75% { transform: translateX(-300%); }
  95% { transform: translateX(-300%); }
  100% { transform: translateX(0); }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 600px;
  margin: 1.5rem auto;
  border-radius: 8px;
`;

const ImageSlider = styled.div`
  display: flex;
  width: 100%;
  animation: ${slideAnimation} 12s infinite;
`;

const SlideImage = styled.img`
  width: 100%;
  flex-shrink: 0;
  border-radius: 8px;
`;

const AboutTyingKnots = () => {
  const images = [
    "https://t3.ftcdn.net/jpg/06/39/09/66/360_F_639096671_1apWk8FAsx9hDA5UKooR06xoCyyPnMSr.jpg",
    "https://t4.ftcdn.net/jpg/06/39/09/67/360_F_639096734_i7ZXpIC3LelqZfd7OwTYuxYIMKb3WozB.jpg",
    "https://img.freepik.com/free-photo/affectionate-indian-couple-celebrating-propose-day-together_23-2151111020.jpg?semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/young-indian-couple-got-married_973056-7.jpg",
  ];

  return (
    <Container>
      <Title>Welcome to TyingKnots</Title>
      <CarouselWrapper>
        <ImageSlider>
          {images.map((src, index) => (
            <SlideImage key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </ImageSlider>
      </CarouselWrapper>
      <Paragraph>
        At <strong>TyingKnots</strong>, we believe that love deserves to be celebrated
        every day. Designed exclusively for couples, TyingKnots is a platform that
        strengthens bonds, celebrates milestones, and creates lasting memories.
      </Paragraph>

    <center> <SubTitle><italic>What Makes TyingKnots Unique?</italic></SubTitle></center>
      <FeaturesList>
        <Feature>Personalized couple profiles to capture your unique story.</Feature>
        <Feature>Photo albums to document and cherish special moments.</Feature>
        <Feature>Event planning tools for anniversaries, getaways, and celebrations.</Feature>
        <Feature>Private messaging and shared journals to stay connected.</Feature>
        <Feature>Relationship milestones tracker to mark and celebrate important dates.</Feature>
      </FeaturesList>

      <SubTitle>For Couples, By Couples</SubTitle>
      <Paragraph>
        Whether you're newlywed or celebrating decades together, TyingKnots offers tools
        and features designed to bring couples closer. Our mission is to help couples
        strengthen their bond and create new traditions for a lifetime of love.
      </Paragraph>

      <SubTitle>Start Your Journey Today</SubTitle>
      <Paragraph>
        Join TyingKnots and embark on a journey to celebrate your love in ways that are
        meaningful to you. Let us help you make every moment count.
      </Paragraph>
    </Container>
  );
};

export default AboutTyingKnots;


