import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the custom hook for authentication

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Access the login state

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the requested component
  return children;
};

export default ProtectedRoute;


//Testing


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRoute = ({ children, requiredPlan }) => {
//   const { isLoggedIn, user } = useAuth();

//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   if (requiredPlan && (!user || user.subscription !== requiredPlan)) {
//     return <Navigate to="/subscription" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
