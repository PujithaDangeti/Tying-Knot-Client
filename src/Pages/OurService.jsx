import React from 'react';
import styled from 'styled-components';

// Styled Components
const ServicesContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ServicesTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #2c3e50;
  font-weight: 700;
`;

const ServiceItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    background-color: #fafafa;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  transition: transform 0.3s ease;

  ${ServiceItem}:hover & {
    transform: scale(1.05); /* Slight zoom effect */
  }
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px; /* Increased space between cards */
`;

const OurService = () => {
  return (
    <ServicesContainer>
      {/* Centered Heading for Our Services */}
      <ServicesTitle>Our Services</ServicesTitle>

      <ServicesGrid>
        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>1. Personalized Matchmaking</ServiceTitle>
            <ServiceDescription>
              At TyingKnot Matrimonial, we use advanced algorithms and a personalized approach to match you with potential life partners based on your preferences, interests, and values.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/premium-vector/vector-2d-graphic-design-concept-illustration-online-dating_249956-447.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Matchmaking" />
          </ServiceWrapper>
        </ServiceItem>

        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>2. Secure Communication</ServiceTitle>
            <ServiceDescription>
              Our platform ensures that all your communication remains private and secure. You can safely message, chat, and video call your matches with peace of mind.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/free-vector/flat-safer-internet-day-illustration_23-2151163146.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Secure Communication" />
          </ServiceWrapper>
        </ServiceItem>

        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>3. Premium Membership</ServiceTitle>
            <ServiceDescription>
              Upgrade to our premium membership to enjoy features like unlimited messages, enhanced visibility, profile boosts, and access to exclusive matches.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/premium-vector/exclusive-benefits-with-premium-membership_624938-2170.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Premium Membership" />
          </ServiceWrapper>
        </ServiceItem>

        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>4. Marriage Counseling</ServiceTitle>
            <ServiceDescription>
              We offer expert marriage counseling and relationship advice to help you navigate your journey to finding the perfect match. Our counselors are here to guide you every step of the way.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/premium-photo/psychological-session-handsome-unhappy-bearded-man-sitting-with-his-wife-sofa-looking-psychologist-while-explaining-their-problem-her_259150-13674.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Marriage Counseling" />
          </ServiceWrapper>
        </ServiceItem>

        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>5. Wedding Planning Assistance</ServiceTitle>
            <ServiceDescription>
              Once you've found the one, we offer wedding planning services to make your special day unforgettable. From venue selection to invitations, we're here to assist you with every detail.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Wedding Planning" />
          </ServiceWrapper>
        </ServiceItem>

        <ServiceItem>
          <ServiceWrapper>
            <ServiceTitle>6. Matrimonial Events</ServiceTitle>
            <ServiceDescription>
              We organize exclusive matrimonial events and meetups to help you connect with like-minded individuals in a safe and welcoming environment.
            </ServiceDescription>
            <ServiceImage src="https://img.freepik.com/premium-vector/indian-wedding-flat-color-illustration_151150-3182.jpg?ga=GA1.1.831869777.1733895274&semt=ais_hybrid" alt="Matrimonial Events" />
          </ServiceWrapper>
        </ServiceItem>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default OurService;