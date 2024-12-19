import React from 'react';
import styled from 'styled-components';

// Styled Components
const PrivacyPolicyContainer = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const PrivacyPolicyTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2c3e50;
`;

const PrivacyPolicySection = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
`;

const ListItem = styled.ul`
  padding-left: 20px;
  font-size: 1.1rem;
  color: #7f8c8d;
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <PrivacyPolicyTitle>Privacy Policy</PrivacyPolicyTitle>

      <PrivacyPolicySection>
        <SectionTitle>Introduction</SectionTitle>
        <SectionContent>
          At TyingKnot Matrimonial, your privacy is important to us. This Privacy Policy outlines the types of information we collect from users, how we use it, and the measures we take to protect it. By using our services, you agree to the collection and use of information in accordance with this policy.
        </SectionContent>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Information We Collect</SectionTitle>
        <SectionContent>
          We collect various types of personal and non-personal information, including but not limited to:
        </SectionContent>
        <ListItem>
          <li>Personal information such as name, contact details, and date of birth.</li>
          <li>Profile information, including your preferences, interests, and photos.</li>
          <li>Usage data, such as how you interact with our site and services.</li>
        </ListItem>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>How We Use Your Information</SectionTitle>
        <SectionContent>
          We use the information we collect to provide, improve, and personalize our services. Specifically, we may use your information to:
        </SectionContent>
        <ListItem>
          <li>Match you with potential partners based on your preferences.</li>
          <li>Enhance your experience with features such as messaging and matchmaking algorithms.</li>
          <li>Contact you with updates, promotions, or customer support inquiries.</li>
        </ListItem>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Data Security</SectionTitle>
        <SectionContent>
          We take the security of your data seriously and implement reasonable security measures to protect it. However, please note that no method of data transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </SectionContent>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Sharing Your Information</SectionTitle>
        <SectionContent>
          We do not share your personal information with third parties, except in the following cases:
        </SectionContent>
        <ListItem>
          <li>When required by law or to protect the rights and safety of our users.</li>
          <li>With trusted partners who help us operate and improve our services (e.g., payment processors).</li>
          <li>With your consent, for example, when you choose to share your information with another user.</li>
        </ListItem>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Cookies and Tracking Technologies</SectionTitle>
        <SectionContent>
          We use cookies and similar technologies to collect and store information about your usage patterns on our website. This helps us improve your experience and provide personalized content.
        </SectionContent>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Your Rights</SectionTitle>
        <SectionContent>
          You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us through the contact information provided on our website.
        </SectionContent>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Changes to This Policy</SectionTitle>
        <SectionContent>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date of the changes will be updated accordingly.
        </SectionContent>
      </PrivacyPolicySection>

      <PrivacyPolicySection>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@tyingknot.com.
        </SectionContent>
      </PrivacyPolicySection>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;