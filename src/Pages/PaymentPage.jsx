import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code'; // Install using: npm install react-qr-code
import { useNavigate } from 'react-router-dom'; // Install using: npm install react-router-dom

// Styled Components
const PaymentContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const QRCodeContainer = styled.div`
  margin-top: 20px;
`;

const PaymentStatus = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  color: green;
`;

const UpiId = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const BackButton = styled.button`
  margin-top: 30px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isQRVisible, setIsQRVisible] = useState(true);
  const navigate = useNavigate();

  // UPI Payment Details
  const upiPaymentLink = 'pujithadangeti@oksbi';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQRVisible(false);
      setPaymentStatus('Payment Successful. Redirecting to premium profiles...');
      setTimeout(() => {
        navigate('/premium-profiles'); // Redirect to premium profiles
      }, 3000);
    }, 10000); // 20 seconds timer

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <PaymentContainer>
      <h2>Complete Your Payment</h2>
      <p>Scan the QR Code below or use the UPI ID to make the payment.</p>

      {/* Display QR Code */}
      {isQRVisible ? (
        <QRCodeContainer>
          <QRCode value={upiPaymentLink} size={256} />
        </QRCodeContainer>
      ) : (
        <PaymentStatus>{paymentStatus}</PaymentStatus>
      )}

      {/* Display UPI ID */}
      {isQRVisible && (
        <UpiId>
          <strong>UPI ID:</strong> <br />
          <span>pujithadangeti@oksbi</span>
        </UpiId>
      )}

      {/* Back Button */}
      <BackButton onClick={handleBack}>Go Back</BackButton>
    </PaymentContainer>
  );
};

export default PaymentPage;