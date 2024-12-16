import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const ProfileContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  margin-bottom: 1rem;

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
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    profilePicture: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(null);

  const navigate = useNavigate();

  // Simulating a user login
  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userProfile"));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const updatedUserData = { ...userData, profilePicture: newProfilePic || userData.profilePicture };
    localStorage.setItem("userProfile", JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
    setIsEditing(false); // Set editing mode to false
  };

  const handleDeleteProfile = () => {
    localStorage.removeItem("userProfile");
    navigate("/login"); // Redirect to login after deletion
  };

  return (
    <ProfileContainer>
      <Title>User Profile</Title>
      <ProfilePicture
        src={userData.profilePicture || "https://i.pinimg.com/736x/d7/09/0e/d7090ecd0836259fe622e0bb84370d54.jpg"}
        alt="Profile"
      />
      {isEditing && <Input type="file" accept="image/*" onChange={handleFileUpload} />}
      <Form onSubmit={handleSaveChanges}>
        <Input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          
          placeholder="Username"
        />
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          
          placeholder="Email"
        />
        <ActionButtons>
          {isEditing ? (
            <>
              <Button type="submit">Save Changes</Button>
              <Button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <Button type="button" onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </ActionButtons>
        {!isEditing && <DeleteButton onClick={handleDeleteProfile}>Delete Profile</DeleteButton>}
      </Form>
    </ProfileContainer>
  );
};

export default UserProfile;
