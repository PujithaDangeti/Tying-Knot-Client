// import React from 'react'

// function Contact() {
//   return (
//     <div>    </div>
//   )
// }

// export default Contact


import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterSection = styled.div`
  background-color: #f8f9fa;
  padding: 138px;
  text-align: center;
  border-top: 2px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #555;

  ${ContactItem}:hover & {
    color: #007bff;
  }
`;

function Contact() {
  return (
    <FooterSection>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactItem>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        <span>Email: TyingKnots@gmail.com</span>
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <FaPhone />
        </IconWrapper>
        <span>Phone: 9988776666</span>
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <FaMapMarkerAlt />
        </IconWrapper>
        <span>Address: 123 Wedding St., Hyderabad, India</span>
      </ContactItem>
    </FooterSection>
  );
}

export default Contact;
