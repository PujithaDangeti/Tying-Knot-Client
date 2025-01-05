import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components

const SubscriptionContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PlanCard = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.active ? '#f0f8ff' : 'white')};
  border-color: ${(props) => (props.active ? '#007bff' : '#ccc')};

  &:hover {
    background-color: #f1f1f1;
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

const BenefitItem = styled.li`
  font-size: 0.9rem;
`;

const SelectButton = styled.button`
  background-color:#ff7f50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(103, 189, 204);
  }
`;

const SubscribeButton = styled.button`
  background-color:#ff7f50;
  color: white;
  padding: 15px 30px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(143, 40, 134);
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Subscription = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '₹500',
      description: 'Basic access to search and view profiles, limited messaging.',
      benefits: ['Profile Viewing', 'Limited Messaging', 'Basic Support'],
    },
    {
      id: 2,
      name: 'Premium Plan',
      price: '₹2499',
      description: 'Full access to search, messaging, and advanced matchmaking features.',
      benefits: ['Profile Viewing', 'Unlimited Messaging', 'Advanced Search', 'Priority Support'],
    },
    {
      id: 3,
      name: 'Elite Plan',
      price: '₹4999',
      description: 'Exclusive access to premium profiles, matchmaking, and VIP support.',
      benefits: ['Profile Viewing', 'Unlimited Messaging', 'Advanced Search', 'VIP Support', 'Premium Profiles'],
    },
  ];

  const handleSelectPlan = (planId) => {
    setActivePlan(planId);
  };

  const handleSubscribe = () => {
    if (activePlan) {
      const selectedPlan = plans.find((plan) => plan.id === activePlan);
      setSuccessMessage(`You have selected the ${selectedPlan.name}. Redirecting to payment...`);

      // Simulate payment gateway redirection
      setTimeout(() => {
       navigate('/payment');
      }, 2000);
    } else {
      setSuccessMessage('Please select a subscription plan.');
    }
  };

  return (
    <SubscriptionContainer>
      <h2>Choose Your Subscription Plan</h2>
      <PlansContainer>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            active={activePlan === plan.id}
            onClick={() => handleSelectPlan(plan.id)}
          >
            <PlanName>{plan.name}</PlanName>
            <Price>{plan.price}</Price>
            <Description>{plan.description}</Description>
            <BenefitsList>
              {plan.benefits.map((benefit, index) => (
                <BenefitItem key={index}>{benefit}</BenefitItem>
              ))}
            </BenefitsList>
            <SelectButton>{activePlan === plan.id ? 'Selected' : 'Select Plan'}</SelectButton>
          </PlanCard>
        ))}
      </PlansContainer>
      <SubscribeButton onClick={handleSubscribe}>Subscribe Now</SubscribeButton>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </SubscriptionContainer>
  );
};

export default Subscription;