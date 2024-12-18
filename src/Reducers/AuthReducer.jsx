// Define the reducer for managing authentication state
const authReducer = (state, action) => {
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
  
  export default authReducer;
  