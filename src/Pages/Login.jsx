//Testing
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:3000/Profiles";

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
  width: 340px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: #ffffff;
  background-color:rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
`;

function Login() {
  const { setIsLoggedIn } = useAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!isValidEmail(loginData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (loginData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.get(API_URL);
      const profiles = response.data;

      const validUser = profiles.find(
        (profile) =>
          profile.email === loginData.email &&
          profile.password === loginData.password
      );

      if (validUser) {
        setMessage("Login Successful!");
        setIsLoggedIn(true);

        // Store username in localStorage for later use
        localStorage.setItem('username', validUser.name);

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
        <Button type="submit">Login</Button>
      </LoginForm>
      {message && <Message success={message === "Login Successful!"}>{message}</Message>}
    </LoginContainer>
  );
}

export default Login;