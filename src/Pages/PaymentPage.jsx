// import React, { useState } from 'react';
// import styled from 'styled-components';
// import QRCode from 'react-qr-code'; // You need to install this package using npm install react-qr-code

// // Styled Components

// const PaymentContainer = styled.div`
//   text-align: center;
//   padding: 40px;
// `;

// const PaymentMethodsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const PaymentButton = styled.button`
//   background-color: #ff7f50;
//   color: white;
//   padding: 15px 30px;
//   border: none;
//   font-size: 1.2rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: rgb(143, 40, 134);
//   }
// `;

// const QRCodeContainer = styled.div`
//   margin-top: 20px;
// `;

// const PaymentPage = () => {
//   const [paymentStatus, setPaymentStatus] = useState('');

//   const handlePayment = (method) => {
//     // Here, you can implement logic to redirect to the respective payment gateway
//     alert('Proceeding with ${method}');
//     // Example: redirect to the respective payment gateway URL
//     // window.location.href = 'payment-gateway-url';
//   };



//   const upiPaymentLink = "upi://pay?pa=tknots@upi&pn=Your%20Name&mc=1234&tid=12345&url=https://your-website.com";

//   return (
//     <PaymentContainer>
//       <h2>Complete Your Payment</h2>
      

//       {/* Display QR Code for UPI Payment */}
//       <QRCodeContainer>
//         <h3>Or pay via UPI (Scan the QR Code)</h3>
//         <QRCode value={upiPaymentLink} />
//       </QRCodeContainer>

//       {paymentStatus && <p>{paymentStatus}</p>}
//     </PaymentContainer>
//   );
// };

// export default PaymentPage;


import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code'; // Install using: npm install react-qr-code

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

  // UPI Payment Details
  const upiPaymentLink = 'pujithadangeti@oksbi';

  const handleBack = () => {
    window.history.back();
  };

  return (
    <PaymentContainer>
      <h2>Complete Your Payment</h2>
      <p>Scan the QR Code below or use the UPI ID to make the payment.</p>

      {/* Display QR Code */}
      <QRCodeContainer>
        <QRCode value={upiPaymentLink} size={256} />
      </QRCodeContainer>

      {/* Display UPI ID */}
      <UpiId>
        <strong>UPI ID:</strong> <br />
        <span>pujithadangeti@oksbi</span>
      </UpiId>

      {/* Payment Status */}
      {paymentStatus && <PaymentStatus>{paymentStatus}</PaymentStatus>}

      {/* Back Button */}
      <BackButton onClick={handleBack}>Go Back</BackButton>
    </PaymentContainer>
  );
};

export default PaymentPage;
