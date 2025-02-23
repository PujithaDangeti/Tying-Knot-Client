import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Styled components
const DetailContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  width: 80%;
  max-width: 900px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const ProfileDetails = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
  color: #555;
`;

const BackButton = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: rgb(154, 156, 2);
  }
`;

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/1d28159d-968f-4f47-b983-f684f1615340");

       
        if (!response.ok) {
          throw new Error("Failed to fetch profile details");
        }
        const data = await response.json();
        console.log("API Data:", data); // Debugging

        // Find user profile based on id from the API response
        const userProfile = data.users.find((user) => user.id === parseInt(id, 10));
        if (userProfile) {
          setProfile(userProfile);
        } else {
          throw new Error("Profile not found");
        }
      } catch (err) {
        console.error("Error fetching profile details:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <DetailContainer>Loading profile details...</DetailContainer>;
  if (error) return <DetailContainer>Error: {error}</DetailContainer>;
  if (!profile) return <DetailContainer>No profile found.</DetailContainer>;

  return (
    <DetailContainer>
      <ProfileHeader>
        <ProfileName>{profile.name}</ProfileName>
      </ProfileHeader>
      <ProfileDetails>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Profession:</strong> {profile.profession}</p>
        <p><strong>Hobbies:</strong> {profile.hobbies}</p>
        <p><strong>Mobile:</strong> {profile.mobile}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </ProfileDetails>
      <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
    </DetailContainer>
  );
};

export default ProfileDetail;
