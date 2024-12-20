

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const API_URL = "https://tyingknots-serverside-2.onrender.com/Profiles";
// const API_URL = "http://localhost:3000/Profiles";


// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const FieldSet = styled.fieldset`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

const Legend = styled.legend`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Field = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1em;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  
  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  display: block;
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  font-size: 1.2em;
`;

function Form() {
  const [Profile, setProfile] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [editProfile, setEditProfile] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProfile(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
    } catch (error) {
      console.error("Error Fetching Profile", error);
    }
  };

  const validateProfile = (profile) => {
    const newErrors = {};
    const emailExists = Profile.some(
      (p) => p.email === profile.email && p.name === profile.name
    );

    if (!profile.name.trim()) newErrors.name = "Name is required.";
    if (!profile.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(profile.email))
      newErrors.email = "Invalid email format.";
    else if (emailExists)
      newErrors.email = "Email already exists for this name.";

    if (!profile.password.trim()) newErrors.password = "Password is required.";
    if (profile.password !== profile.confirmpassword)
      newErrors.password = "Password doesn't match.";
    else if (profile.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addProfile = async (event) => {
    event.preventDefault();
    if (!validateProfile(newProfile)) return;

    try {
      const response = await axios.post(API_URL, newProfile);
      setProfile([...Profile, response.data]);
      setNewProfile({ name: "", email: "", password: "", confirmpassword: "" });
      setErrors({});
      setSuccessMessage("Sign-up successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error) {
      console.error("Error adding Profile", error);
    }
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    if (!validateProfile(editProfile)) return;

    try {
      const response = await axios.put(`${API_URL}/${editProfile.id}`, editProfile);
      setProfile(Profile.map((p) => (p.id === response.data.id ? response.data : p)));
      setEditProfile(null);
      setErrors({});
    } catch (error) {
      console.error("Error updating Profile", error);
    }
  };

  const deleteProfile = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProfile(Profile.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting Profile", error);
    }
  };

  return (
    <Container>
      <h2>Sign-Up Form</h2>
      <form onSubmit={addProfile}>
        <FieldSet>
          <Legend>Personal Details</Legend>

          <Field>
            <Label>Name:</Label>
            <Input
              type="text"
              value={newProfile.name}
              onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </Field>

          <Field>
            <Label>Email:</Label>
            <Input
              type="email"
              value={newProfile.email}
              onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </Field>

          <Field>
            <Label>Password:</Label>
            <Input
              type="password"
              value={newProfile.password}
              onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </Field>

          <Field>
            <Label>Confirm Password:</Label>
            <Input
              type="password"
              value={newProfile.confirmpassword}
              onChange={(e) => setNewProfile({ ...newProfile, confirmpassword: e.target.value })}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </Field>

          <Buttons>
            <Button type="submit">Sign-Up</Button>
          </Buttons>
        </FieldSet>
      </form>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

      {editProfile && (
        <div>
          <h3>Edit Profile</h3>
          <form onSubmit={updateProfile}>
            <FieldSet>
              <Legend>Edit Personal Details</Legend>
              <Field>
                <Label>Name:</Label>
                <Input
                  type="text"
                  value={editProfile.name}
                  onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                />
              </Field>
              <Field>
                <Label>Email:</Label>
                <Input
                  type="email"
                  value={editProfile.email}
                  onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                />
              </Field>
              <Field>
                <Label>Password:</Label>
                <Input
                  type="password"
                  value={editProfile.password}
                  onChange={(e) => setEditProfile({ ...editProfile, password: e.target.value })}
                />
              </Field>
              <Buttons>
                <Button type="submit">Update</Button>
                <Button type="button" onClick={() => setEditProfile(null)}>
                  Cancel
                </Button>
              </Buttons>
            </FieldSet>
          </form>
        </div>
      )}
    </Container>
  );
}

export default Form;
