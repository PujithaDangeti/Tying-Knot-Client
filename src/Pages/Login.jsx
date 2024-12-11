import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const API_URL = "http://localhost:3000/Profiles";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const LoginFormStyled = styled.form`
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
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
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

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(API_URL, loginData);
      if (response.status === 200) {
        setMessage("Login Successful!");
        console.log(response.data);
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.log("Error during login", error);
      setMessage("Error occurred during login. Please try again later.");
    }
  };

  return (
    <LoginContainer>
      <Header>Login</Header>
      <LoginFormStyled onSubmit={handleLogin}>
        <Input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          placeholder="Password"
          required
        />
        <Button type="submit">Login</Button>
      </LoginFormStyled>
      {message && <Message success={message === "Login Successful!"}>{message}</Message>}
    </LoginContainer>
  );
}

export default LoginForm;