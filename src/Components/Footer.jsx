import React, { useState } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color:rgb(0, 0, 0); 
  padding: 0;

  text-align: center;
  font-family: Arial, sans-serif;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1050px; 
  margin: 0 auto;
  padding: 10px; 
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  width: 25%; 
  margin: 0px; 

  @media (max-width: 768px) {
    width: 45%; /* Responsive: Stacked sections on smaller screens */
  }
  @media (max-width: 480px) {
    width: 100%; /* Full width for smaller screens */
  }
`;

const SectionTitle = styled.h3`
  color: #fff; /* White text for contrast on orange background */
  font-size: 25px; /* Reduced font size */
  margin-bottom: 8px; /* Reduced margin */
`;

const SectionText = styled.p`
  color: #fff; /* White text for contrast on orange background */
  font-size: 12px; /* Reduced font size */
`;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  color: #fff; /* White text for contrast on orange background */
  font-size: 12px; /* Reduced font size */
`;

const Link = styled.a`
  color: #fff; /* White text for contrast on orange background */
  text-decoration: none;
  margin: 3px 0; /* Reduced margin */
  display: block;
  &:hover {
    color: #ff5733; /* Hover effect color */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled.a`
  margin: 0 8px; /* Reduced margin */
  text-decoration: none;
  color: #fff; /* White text for contrast on orange background */
  &:hover {
    color: #ff5733; /* Hover effect color */
  }
`;


const FooterBottom = styled.div`
  margin-top: 15px ; 
  font-size: 12px; 
  color: #fff; 
`;


const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>Email: TyingKnots@gmail.com</SectionText>
          <SectionText>Phone: 9988776666</SectionText>
          <SectionText>Address: 123 Wedding St., Hyderabad, India</SectionText>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <LinksList>
          <LinkItem><Link href="/about">About Us</Link></LinkItem>
            <LinkItem><Link href="/OurService">Our Services</Link></LinkItem>
            <LinkItem><Link href="/faqpage">FAQs</Link></LinkItem>
            <LinkItem><Link href="/PrivacyPolicy">Privacy Policy</Link></LinkItem>
            <LinkItem><Link href="/TermsService">Terms of Service</Link></LinkItem>
          </LinksList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
            <SocialLink href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</SocialLink>
          </SocialIcons>
        </FooterSection>
      </FooterContainer>
      
      <FooterBottom>
        <SectionText>© 2024 TyingKnot Wedding Site. All rights reserved.</SectionText>
      </FooterBottom>
    </FooterWrapper>
  );
};



export default Footer;