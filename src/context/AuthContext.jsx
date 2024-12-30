// import React, { createContext, useState, useContext } from "react";



// // Create Context
// const AuthContext = createContext();

// // Provider Component
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Login State

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook for Auth
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage or default to false
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedState = localStorage.getItem("isLoggedIn");
    return storedState ? JSON.parse(storedState) : false;
  });

  // Sync isLoggedIn state with localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Auth
export const useAuth = () => useContext(AuthContext);
