import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
const ProfileContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  width: 80%;
  max-width: 900px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ProfileInfo = styled.div`
  flex-grow: 1;
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const ViewProfileButton = styled.button`
  background-color: #ff7f50;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: rgb(154, 156, 2);
  }
`;

const ProfileDetailsDropdown = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 100%;
`;

const profileImages = {
  16: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OeMOzvvEg18144Z4u2TH51RNAnaBtrFx5Q&s",
  17: "https://static.vecteezy.com/system/resources/previews/031/721/689/large_2x/ai-generated-studio-portrait-of-handsome-indian-man-on-colour-background-photo.jpg",
  18: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigi9uPjR4JuXlogaE5FPlwvufh8kLJd7TPg&s",
  19: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCIVlCAD_Kkeh2ftq9cc8idMV9botnbQ6Ew&s",
  20: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcno6RekNYsz350Kk_5HG5PcYvSSt_X0LTQ&s",
  21: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez1g7hz7kA4ApSaAG2p5fjPfllWzGT5conA&s",
  22: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYS_CArMwu17yfp0hR_kAgGJ4psKDOiLRaQQ&s",
  23: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZBQPeHYaB9fmPL2RjIHPLhf69kxW2dX7xA&s",
  24: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhn85VOX4ulTMw-FblDDTpExbX1k638x5Kw&s",
  25: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtMghCHDdGU-04JmBV4HenPk5gecoGDaj4Q&s",
  26: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-igQTZ2jRNL5RPktefvjx_V5VYvObvTVoPw&s",
  27: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnFekE-Wg2CR8qX0aFgjFIG20mGXHiILVVQ&s",
  28: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0-uD0fv_q0-bbeA8KiFCweiuxqID_4MmRw&s",
  29: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTLryXn3LoE5v1D3sJwGIiCyQEPoF-xsNFA&s",
  30: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5xdFXzCfNJ3WGqm-MbL7rRs61JruAKFkD0Py0BmQ-imc3MEOdmoiBjkhW_XJkmUgk-8&usqp=CAU"
};

const getProfileImage = (id) =>
  profileImages[id] || "https://via.placeholder.com/150";

const PremiumProfiles = () => {
  const [premiumProfiles, setPremiumProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedProfileId, setExpandedProfileId] = useState(null);

  useEffect(() => {
    const fetchPremiumProfiles = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/36f1f771-acac-4da7-9e2e-b7301d0a2f71"
        );
        if (!response.ok) throw new Error("Failed to fetch premium profiles");

        const data = await response.json();
        setPremiumProfiles(data.users || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPremiumProfiles();
  }, []);

  const toggleDropdown = (id) => {
    setExpandedProfileId((prev) => (prev === id ? null : id));
  };

  if (loading) return <div>Loading premium profiles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProfileContainer>
      <h2>Premium Profiles</h2>
      {premiumProfiles.length > 0 ? (
        premiumProfiles.map((profile) => (
          <ProfileCard key={profile.id}>
            <ProfileHeader>
              <ProfileImage
                src={getProfileImage(profile.id)}
                alt={profile.name || "Profile Image"}
              />
              <ProfileInfo>
                <ProfileName>{profile.name || "No Name Provided"}</ProfileName>
                <ViewProfileButton onClick={() => toggleDropdown(profile.id)}>
                  {expandedProfileId === profile.id
                    ? "Hide Details"
                    : "View Details"}
                </ViewProfileButton>
              </ProfileInfo>
            </ProfileHeader>
            {expandedProfileId === profile.id && (
              <ProfileDetailsDropdown>
                <p><strong>ID:</strong> {profile.id}</p>
                <p><strong>Name:</strong> {profile.name || "N/A"}</p>
                <p><strong>Age:</strong> {profile.age || "N/A"}</p>
                <p><strong>Gender:</strong> {profile.gender || "N/A"}</p>
                <p><strong>Location:</strong> {profile.location || "N/A"}</p>
                <p><strong>Profession:</strong> {profile.profession || "N/A"}</p>
                <p><strong>Hobbies:</strong> {profile.hobbies || "N/A"}</p>
                <p><strong>Mobile:</strong> {profile.mobile || "N/A"}</p>
                <p><strong>Email:</strong> {profile.email || "N/A"}</p>
              </ProfileDetailsDropdown>
            )}
          </ProfileCard>
        ))
      ) : (
        <p>No premium profiles available</p>
      )}
    </ProfileContainer>
  );
};

export default PremiumProfiles;