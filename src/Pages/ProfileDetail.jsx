import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Styled components
const ProfileDetailContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 900px;
  margin: 2rem auto;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProfileName = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

const ProfileDetails = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data based on the profile ID
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c`); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Profile not found");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Profile not found!</div>;
  }

  return (
    <ProfileDetailContainer>
      <ProfileImage src={profile.image || "https://via.placeholder.com/150"} alt={profile.name} />
      <ProfileName>{profile.name}</ProfileName>
      <ProfileDetails>{profile.details}</ProfileDetails>
    </ProfileDetailContainer>
  );
};

export default ProfileDetail;
