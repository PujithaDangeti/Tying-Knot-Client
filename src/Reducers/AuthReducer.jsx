// Define the reducer for managing authentication state
const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, isAuthenticated: true, user: action.payload };
      case "UPDATE":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { isAuthenticated: true, user: action.payload };
//     case "LOGOUT":
//       return { isAuthenticated: false, user: null };
//     default:
//       return state;
//   }
// };

// export default AuthReducer;