// //testing


// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { useAuth } from "../context/AuthContext";
// import bgImage from "../assets/bgImage.jpg";

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const DashboardContainer = styled.div`
//   height: 100vh;
//   background: url(${bgImage}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-align: center;
//   padding: 20px;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const WelcomeMessage = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
//   animation: ${fadeIn} 1s ease-out;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const SubText = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 300;
//   margin-bottom: 2rem;
//   animation: ${fadeIn} 1.5s ease-out;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// const Dashboard = () => {
//   const { setIsLoggedIn } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userEmail = location.state?.email || "User";

//   useEffect(() => {
//     if (!location.state?.email) {
//       navigate("/login");
//     }
//   }, [location, navigate]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <DashboardContainer>
//       <div>
//         <WelcomeMessage>Welcome to TyingKnots, {userEmail}!</WelcomeMessage>
//         <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
//       </div>
//     </DashboardContainer>
//   );
// };

// export default Dashboard;



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import bgImage from "../assets/bgImage.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DashboardContainer = styled.div`
  height: 100vh;
  background: url("https://img.freepik.com/premium-photo/decorative-toran-hindu-doorway-hang-traditional-indian-illustration-concept_1279521-17388.jpg?w=1060") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username, navigate]);

  return (
    <DashboardContainer>
      <div>
        <WelcomeMessage>Welcome to TyingKnots, {username}</WelcomeMessage>
        <SubText>"Find Your Perfect Match, Start Your Forever Today!"</SubText>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;