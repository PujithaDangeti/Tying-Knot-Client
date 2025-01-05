import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code'; // You need to install this package using npm install react-qr-code

// Styled Components

const PaymentContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const PaymentButton = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 15px 30px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(143, 40, 134);
  }
`;

const QRCodeContainer = styled.div`
  margin-top: 20px;
`;

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = (method) => {
    // Here, you can implement logic to redirect to the respective payment gateway
    alert('Proceeding with ${method}');
    // Example: redirect to the respective payment gateway URL
    // window.location.href = 'payment-gateway-url';
  };



  const upiPaymentLink = "upi://pay?pa=tknots@upi&pn=Your%20Name&mc=1234&tid=12345&url=https://your-website.com";

  return (
    <PaymentContainer>
      <h2>Complete Your Payment</h2>
      

      {/* Display QR Code for UPI Payment */}
      <QRCodeContainer>
        <h3>Or pay via UPI (Scan the QR Code)</h3>
        <QRCode value={upiPaymentLink} />
      </QRCodeContainer>

      {paymentStatus && <p>{paymentStatus}</p>}
    </PaymentContainer>
  );
};

export default PaymentPage;