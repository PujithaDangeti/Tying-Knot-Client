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


//Testing


// import React, { createContext, useState, useEffect, useContext } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("isLoggedIn"));

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [user]);

//   const login = (userData) => {
//     setUser(userData);
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", true);
//   };

//   const logout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
