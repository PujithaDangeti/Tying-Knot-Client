import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 1rem auto;
  padding: 0.8rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: green;
  font-size: 1rem;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const UploadLabel = styled.label`
  display: inline-block;
  margin-top: 0.5rem;
  background-color: #6c757d;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Profile = ({ user }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(""); // To display the saved message

  // Load user data from localStorage or default
  useEffect(() => {
    const storedName = localStorage.getItem("profileName") || user?.name || "User Name";
    const storedImage = localStorage.getItem("profileImage");
    setName(storedName);
    if (storedImage) setImage(storedImage);
  }, [user]);

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl); // Save to localStorage
    }
  };

  const handleSave = () => {
    localStorage.setItem("profileName", name);
    setMessage("Your changes have been saved.");
    setTimeout(() => setMessage(""), 2000); // Clear the message after 2 seconds
  };

  const handleDelete = () => {
    localStorage.removeItem("profileName");
    localStorage.removeItem("profileImage");
    setName("");
    setImage(null);
    setMessage("Your profile has been deleted.");
    setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
  };

  return (
    <ProfileContainer>
      <h2>Welcome, {name}</h2>
      <ProfileImageContainer>
        <ProfileImage src={image || "https://via.placeholder.com/150"} alt="Profile" />
        <UploadLabel htmlFor="fileInput">Upload Image</UploadLabel>
        <HiddenInput
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ProfileImageContainer>

      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleSave}>Save Changes</Button>
      <Button onClick={handleDelete} style={{ backgroundColor: "#dc3545" }}>
        Delete Profile
      </Button>

      {message && <Message>{message}</Message>} {/* Display message */}
    </ProfileContainer>
  );
};

export default Profile;

