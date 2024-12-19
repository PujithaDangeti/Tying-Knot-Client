import React from 'react';
import styled from 'styled-components';


const FAQContainer = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const FAQTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Question = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const FaqPage = () => {
  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      
      <FAQItem>
        <Question>1. How do I create a profile on TyingKnot Matrimonial?</Question>
        <Answer>
          To create a profile, simply sign up using your email address or phone number, then fill in your personal information, preferences, and interests.
        </Answer>
      </FAQItem>
      
      <FAQItem>
        <Question>2. How does the matchmaking algorithm work?</Question>
        <Answer>
          Our matchmaking algorithm takes into account your preferences, interests, and personal data to suggest potential matches. We use advanced filters to ensure compatibility.
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>3. Is my personal information secure?</Question>
        <Answer>
          Yes, your data is securely stored using the latest encryption methods. We respect your privacy and ensure that your information is only shared with your consent.
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>4. Can I search for matches manually?</Question>
        <Answer>
          Yes, you can use our search feature to filter matches based on location, religion, caste, age, and other criteria to find the best possible partners.
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>5. What happens if I want to delete my account?</Question>
        <Answer>
          If you wish to delete your account, you can contact our support team, or simply follow the steps in your account settings to deactivate your profile.
        </Answer>
      </FAQItem>
      
      <FAQItem>
        <Question>6. Can I contact other members?</Question>
        <Answer>
          Yes, once you’ve connected with someone, you can message them through our secure messaging platform. If both parties show interest, you can take the conversation forward.
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>7. Do you offer paid membership plans?</Question>
        <Answer>
          Yes, we offer both free and premium membership plans. Premium members get access to additional features such as unlimited messaging, profile boosts, and enhanced matchmaking algorithms.
        </Answer>
      </FAQItem>
      
    </FAQContainer>
  );
};

export default FaqPage;