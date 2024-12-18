import React, { useState, useEffect } from 'react';

// API link for mock data
const API_URL = 'https://mocki.io/v1/eddd6c1d-ef98-4d24-8a76-b2da349cba23';

const SearchMatchmaking = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Search text input
  const [profiles, setProfiles] = useState([]); // Full list of profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered results

  // Fetch profiles from the mock API
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProfiles(data.profiles);
        setFilteredProfiles(data.profiles); // Initially display all profiles
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter profiles based on search term (name, location, or age)
    const results = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(term) ||
        profile.location.toLowerCase().includes(term) ||
        profile.age.toString().includes(term)
    );

    setFilteredProfiles(results);
  };

  return (
    <div style={styles.container}>
      <h2>Search & Matchmaking</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, age, or location..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.input}
      />

      {/* Search Results */}
      <div style={styles.results}>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div key={profile.id} style={styles.card}>
              <h4>{profile.name}</h4>
              <p>Age: {profile.age}</p>
              <p>Location: {profile.location}</p>
            </div>
          ))
        ) : (
          <p>No profiles found matching your search.</p>
        )}
      </div>
    </div>
  );
};

// Basic styles
const styles = {
  container: { padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' },
  input: { padding: '10px', width: '100%', marginBottom: '20px', fontSize: '16px' },
  results: { display: 'flex', flexDirection: 'column', gap: '10px' },
  card: { border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#f9f9f9' },
};

export default SearchMatchmaking;