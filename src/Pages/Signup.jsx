import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_URL = "http://localhost:3000/Profiles";

// Styled Components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 5px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

const ProfileList = styled.div`
  margin: 20px 0;
`;

const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
  background-color: #fff;
`;

function Form() {
  const [Profile, setProfile] = useState([]); // Ensure Profile is initialized as an array
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword:""
  });
  const [editProfile, setEditProfile] = useState(null);
  const [errors, setErrors] = useState({});

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
    

    

    if (!profile.password.trim())
      newErrors.password = "Password is required.";
    if(profile.password!=confirmpassword)
      newErrors.password ="Password doesn't Match";
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
      setNewProfile({ name: "", email: "", password: "" , confirmpassword:""});
      setErrors({});
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
    <FormContainer>
      <h2>Sign-Up Form</h2>
      <form onSubmit={addProfile}>
        <Input
          type="text"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          placeholder="Name"
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}

        <Input
          type="email"
          value={newProfile.email}
          onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
          placeholder="Email"
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <Input
          type="password"
          value={newProfile.password}
          onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
          placeholder="Password"
        />
         <Input
            type = "password"
            value={newProfile.confirmpassword}
            onChange={(e) =>  setNewProfile({...newProfile, confirmpassword: e.target.value})}
            placeholder = "confirmpassword"
            />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}

        <Button type="submit">Sign-Up</Button>
      </form>

      {editProfile && (
        <div>
          <h3>Edit Profile</h3>
          <form onSubmit={updateProfile}>
            <Input
              type="text"
              value={editProfile.name}
              onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
              placeholder="Name"
            />
            <Input
              type="email"
              value={editProfile.email}
              onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
              placeholder="Email"
            />
            <Input
              type="password"
              value={editProfile.password}
              onChange={(e) => setEditProfile({ ...editProfile, password: e.target.value })}
              placeholder="Password"
            />
           
            

            <Button type="submit">Update</Button>
            <Button type="button" onClick={() => setEditProfile(null)}>Cancel</Button>
          </form>
        </div>
      )}

      {/* <ProfileList>
        {Array.isArray(Profile) && Profile.map((profile) => (
          <ProfileItem key={profile.id}>
            <div>
              {profile.name} - {profile.email}
            </div>
            <div>
              <Button onClick={() => setEditProfile(profile)}>Edit</Button>
              <Button onClick={() => deleteProfile(profile.id)}>Delete</Button>
            </div>
          </ProfileItem>
        ))}
      </ProfileList> */}
    </FormContainer>
  );
}

export default Form;
