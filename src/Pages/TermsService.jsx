import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #34495e;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7f8c8d;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 10px;
`;

const TermsService = () => {
  return (
    <Container>
      <Title>Terms of Service</Title>

      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          Welcome to TyingKnot Matrimonial. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with these terms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Eligibility</SectionTitle>
        <Paragraph>
          To use our services, you must be at least 18 years old and capable of forming a legally binding contract. By using our platform, you represent that you meet these requirements.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Account Registration</SectionTitle>
        <Paragraph>
          To use our services, you need to create an account. You agree to provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account information.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>User Conduct</SectionTitle>
        <Paragraph>You agree to use TyingKnot Matrimonial in accordance with applicable laws and the following guidelines:</Paragraph>
        <List>
          <ListItem>Respect other users' privacy and personal information.</ListItem>
          <ListItem>Do not engage in any fraudulent, misleading, or inappropriate behavior.</ListItem>
          <ListItem>Do not post offensive, abusive, or illegal content.</ListItem>
          <ListItem>Do not spam or harass other users on the platform.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Privacy and Data Collection</SectionTitle>
        <Paragraph>
          By using our services, you agree to the collection and use of your personal data as outlined in our Privacy Policy. We take data privacy seriously and ensure that your information is protected.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Subscription and Payment</SectionTitle>
        <Paragraph>
          Some of our services may require a subscription or payment. By subscribing or making a payment, you agree to the payment terms and conditions, including any applicable fees and billing cycles.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Termination of Account</SectionTitle>
        <Paragraph>
          We reserve the right to suspend or terminate your account if you violate these Terms of Service. You can also terminate your account at any time by contacting us or through your account settings.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Disclaimer of Warranties</SectionTitle>
        <Paragraph>
          TyingKnot Matrimonial makes no warranties or representations about the accuracy, reliability, or availability of the services. We do not guarantee that the platform will be error-free or uninterrupted.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Limitation of Liability</SectionTitle>
        <Paragraph>
          TyingKnot Matrimonial is not liable for any direct, indirect, incidental, special, or consequential damages arising out of your use or inability to use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Indemnification</SectionTitle>
        <Paragraph>
          You agree to indemnify and hold harmless TyingKnot Matrimonial from any claims, losses, damages, or liabilities arising out of your use of the services or violation of these terms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Changes to Terms</SectionTitle>
        <Paragraph>
          We may update these Terms of Service from time to time. Any changes will be posted on this page, and the date of the most recent revision will be updated accordingly. You are encouraged to review the terms periodically.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Governing Law</SectionTitle>
        <Paragraph>
          These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about these Terms of Service, please contact us at support@tyingknot.com.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsService;