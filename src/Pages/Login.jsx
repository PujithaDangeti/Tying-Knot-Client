// import axios from 'axios';
// import { useState } from 'react';
// import styled from 'styled-components';
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from 'react-router-dom';

// const API_URL = "http://localhost:3000/Profiles";

// // Styled Components
// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f4f4f4;
// `;

// const LoginForm = styled.form`
//   background: #ffffff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   width: 100%;
//   max-width: 400px;
// `;

// const Input = styled.input`
//   padding: 0.8rem;
//   font-size: 1rem;
//   border: 1px solid #cccccc;
//   border-radius: 4px;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const Button = styled.button`
//   padding: 0.8rem;
//   font-size: 1rem;
//   color: #ffffff;
//   background-color:rgb(41, 179, 160);
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color:rgb(41, 179, 160);
//   }

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;

// const Message = styled.p`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   color: ${props => (props.success ? 'green' : 'red')};
//   text-align: center;
// `;

// const Header = styled.h2`
//   margin-bottom: 1.5rem;
//   color: #333;
//   text-align: center;
// `;

// // Login Component
// function Login() {
//   const { setIsLoggedIn } = useAuth();
//     const [loginData, setLoginData] = useState({
//         email: "",
//         password: ""
//     });
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         setIsLoggedIn(true);

//         try {
//             // Fetch all profiles
//             const response = await axios.get(API_URL);
//             const profiles = response.data;

//             // Validate credentials
//             const validUser = profiles.find(
//                 (profile) =>
//                     profile.email === loginData.email &&
//                     profile.password === loginData.password
//             );

//             if (validUser) {
//                 setMessage("Login Successful!");
//                 // Redirect to Dashboard after success
//                 setTimeout(() => {
//                     navigate("/Dashboard", { state: { email: loginData.email } });
//                 }, 1000);
//             } else {
//                 setMessage("Invalid email or password. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//             setMessage("Error occurred during login. Please try again later.");
//         }
//     };

//     return (
//         <LoginContainer>
//             <Header>Login</Header>
//             <LoginForm onSubmit={handleLogin}>
//                 <Input
//                     type="email"
//                     value={loginData.email}
//                     onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                     placeholder="Email"
//                     required
//                 />
//                 <Input
//                     type="password"
//                     value={loginData.password}
//                     onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                     placeholder="Password"
//                     required
//                 />
//                 <Button type="submit">Login</Button>
//             </LoginForm>
//             {message && <Message success={message === "Login Successful!"}>{message}</Message>}
//         </LoginContainer>
//     );
// }

// export default Login;





// // const Login = () => {
  

// //   const handleLogin = () => {
// //     // Simulate successful login
// //     setIsLoggedIn(true); // Update global login state
// //     navigate("/dashboard"); // Redirect to dashboard
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // };

// // export default Login;


import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const API_URL = "https://tyingknots-serverside-2.onrender.com/Profiles";
// const API_URL = "http://localhost:3000/Profiles";

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: rgb(41, 179, 160);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(31, 159, 140);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${props => (props.success ? 'green' : 'red')};
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const ShowPasswordToggle = styled.span`
  cursor: pointer;
  font-size: 0.9rem;
 
  color:rgb(13, 13, 14);
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordLink = styled.a`
  color:rgb(2, 2, 2);
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

// Login Component
function Login() {
  const { setIsLoggedIn } = useAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    // Client-side validations
    if (!isValidEmail(loginData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (loginData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Fetch all profiles
      const response = await axios.get(API_URL);
      const profiles = response.data;

      // Validate credentials
      const validUser = profiles.find(
        (profile) =>
          profile.email === loginData.email &&
          profile.password === loginData.password
      );

      if (validUser) {
        setMessage("Login Successful!");
        setIsLoggedIn(true);

        // Redirect to Dashboard after success
        setTimeout(() => {
          navigate("/Dashboard", { state: { email: loginData.email } });
        }, 1000);
      } else {
        setMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Error occurred during login. Please try again later.");
    }
  };

  return (
    <LoginContainer>
      <Header>Login</Header>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          placeholder="Email"
          required
        />
        <div style={{ position: "relative" }}>
          <Input
            type={showPassword ? "text" : "password"}
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            placeholder="Password"
            required
          />
          <ShowPasswordToggle onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </ShowPasswordToggle>
        </div>
        <ForgotPasswordLink href="/forgot-password">Forgot Password?</ForgotPasswordLink>
        <Button type="submit">Login</Button>
      </LoginForm>
      {message && <Message success={message === "Login Successful!"}>{message}</Message>}
    </LoginContainer>
  );
}

export default Login;


