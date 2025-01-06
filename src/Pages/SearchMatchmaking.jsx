import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const API_URL = 'https://mocki.io/v1/eddd6c1d-ef98-4d24-8a76-b2da349cba23';

const SearchMatchmaking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProfiles(data.profiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  const handleSearch = () => {
    setSearchInitiated(true);
    const results = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.age.toString().includes(searchTerm)
    );
    setFilteredProfiles(results);
  };

  const handleChat = (profile) => {
    navigate('/chat', { state: { profile } });
  };

  return (
    <Container>
      <Title>Search & Matchmaking</Title>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search by name, age, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      {searchInitiated && (
        <Results>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id}>
                <h4>{profile.name}</h4>
                <p>Age: {profile.age}</p>
                <p>Location: {profile.location}</p>
                <ChatButton onClick={() => handleChat(profile)}>Chat</ChatButton>
              </ProfileCard>
            ))
          ) : (
            <NoResults>No profiles found matching your search.</NoResults>
          )}
        </Results>
      )}
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 150px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color:  #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Results = styled.div`
  margin-top: 20px;
`;

const ProfileCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color:rgb(249, 249, 249);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChatButton = styled.button`
  padding: 8px 16px;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const NoResults = styled.p`
  text-align: center;
  color: #777;
  font-style: italic;
`;

export default SearchMatchmaking;