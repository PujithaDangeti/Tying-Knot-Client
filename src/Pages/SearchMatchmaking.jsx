// import React, { useState, useEffect } from 'react';

// // API link for mock data
// const API_URL = 'https://mocki.io/v1/eddd6c1d-ef98-4d24-8a76-b2da349cba23';

// const SearchMatchmaking = () => {
//   const [searchTerm, setSearchTerm] = useState(''); // Search text input
//   const [profiles, setProfiles] = useState([]); // Full list of profiles
//   const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered results

//   // Fetch profiles from the mock API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setProfiles(data.profiles);
//         setFilteredProfiles(data.profiles); // Initially display all profiles
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   // Handle search input change
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     // Filter profiles based on search term (name, location, or age)
//     const results = profiles.filter(
//       (profile) =>
//         profile.name.toLowerCase().includes(term) ||
//         profile.location.toLowerCase().includes(term) ||
//         profile.age.toString().includes(term)
//     );

//     setFilteredProfiles(results);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Search & Matchmaking</h2>
      
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search by name, age, or location..."
//         value={searchTerm}
//         onChange={handleSearch}
//         style={styles.input}
//       />

//       {/* Search Results */}
//       <div style={styles.results}>
//         {filteredProfiles.length > 0 ? (
//           filteredProfiles.map((profile) => (
//             <div key={profile.id} style={styles.card}>
//               <h4>{profile.name}</h4>
//               <p>Age: {profile.age}</p>
//               <p>Location: {profile.location}</p>
//             </div>
//           ))
//         ) : (
//           <p>No profiles found matching your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Basic styles
// const styles = {
//   container: { padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' },
//   input: { padding: '10px', width: '100%', marginBottom: '20px', fontSize: '16px' },
//   results: { display: 'flex', flexDirection: 'column', gap: '10px' },
//   card: { border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#f9f9f9' },
// };

// export default SearchMatchmaking;

import React, { useState, useEffect } from 'react';

// API link for mock data
const API_URL = 'https://mocki.io/v1/eddd6c1d-ef98-4d24-8a76-b2da349cba23';

const SearchMatchmaking = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Search text input
  const [profiles, setProfiles] = useState([]); // Full list of profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered results
  const [showResults, setShowResults] = useState(false); // Toggle to show results only on search

  // Fetch profiles from the mock API
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

  // Handle search button click
  const handleSearch = () => {
    setShowResults(true);
    const term = searchTerm.toLowerCase();

    // Filter profiles based on search term (name only)
    const results = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(term)
    );

    setFilteredProfiles(results);
  };

  return (
    <div style={styles.container}>
      <h2>Search & Matchmaking</h2>
      
      {/* Search Input and Button */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>

      {/* Search Results */}
      {showResults && (
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
      )}
    </div>
  );
};

// Basic styles
const styles = {
  container: { padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' },
  searchContainer: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { padding: '10px', flex: 1, fontSize: '16px' },
  searchButton: { padding: '10px 20px', fontSize: '16px', cursor: 'pointer' },
  results: { display: 'flex', flexDirection: 'column', gap: '10px' },
  card: { border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#f9f9f9' },
};

export default SearchMatchmaking;

// import React, { useState, useEffect } from 'react';

// // API link for mock data
// const API_URL = 'https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c';

// const SearchMatchmaking = () => {
//   const [searchTerm, setSearchTerm] = useState(''); // Search text input
//   const [profiles, setProfiles] = useState([]); // Full list of profiles
//   const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered results
//   const [showResults, setShowResults] = useState(false); // Toggle to show results only on search
//   const [selectedProfile, setSelectedProfile] = useState(null); // Selected profile for detailed view

//   // Fetch profiles from the mock API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setProfiles(data.profiles);
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   // Handle search button click
//   const handleSearch = () => {
//     setShowResults(true);
//     const term = searchTerm.toLowerCase();

//     // Filter profiles based on search term (name only)
//     const results = profiles.filter((profile) =>
//       profile.name.toLowerCase().includes(term)
//     );

//     setFilteredProfiles(results);
//   };

//   // Handle viewing a profile
//   const handleViewProfile = (profile) => {
//     setSelectedProfile(profile);
//   };

//   // Handle going back to search results
//   const handleBackToSearch = () => {
//     setSelectedProfile(null);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Search & Matchmaking</h2>

//       {/* Search Input and Button */}
//       {!selectedProfile && (
//         <div>
//           <div style={styles.searchContainer}>
//             <input
//               type="text"
//               placeholder="Search by name..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={styles.input}
//             />
//             <button onClick={handleSearch} style={styles.searchButton}>
//               Search
//             </button>
//           </div>

//           {/* Search Results */}
//           {showResults && (
//             <div style={styles.results}>
//               {filteredProfiles.length > 0 ? (
//                 filteredProfiles.map((profile) => (
//                   <div key={profile.id} style={styles.card}>
//                     <h4>{profile.name}</h4>
//                     <p>Age: {profile.age}</p>
//                     <p>Location: {profile.location}</p>
//                     <button
//                       style={styles.viewButton}
//                       onClick={() => handleViewProfile(profile)}
//                     >
//                       View Profile
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <p>No profiles found matching your search.</p>
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Profile Detail View */}
//       {selectedProfile && (
//         <div style={styles.profileDetails}>
//           <button onClick={handleBackToSearch} style={styles.backButton}>
//             Back to Search
//           </button>
//           <img
//             src={selectedProfile.photo} // Assuming `photo` is a property in the profile object
//             alt={selectedProfile.name}
//             style={styles.profileImage}
//           />
//           <h3>{selectedProfile.name}</h3>
//           <p><strong>Age:</strong> {selectedProfile.age}</p>
//           <p><strong>Location:</strong> {selectedProfile.location}</p>
//           <p><strong>About:</strong> {selectedProfile.about}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Basic styles
// const styles = {
//   container: { padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' },
//   searchContainer: { display: 'flex', gap: '10px', marginBottom: '20px' },
//   input: { padding: '10px', flex: 1, fontSize: '16px' },
//   searchButton: { padding: '10px 20px', fontSize: '16px', cursor: 'pointer' },
//   results: { display: 'flex', flexDirection: 'column', gap: '10px' },
//   card: { border: '1px solid #ddd', padding: '10px', borderRadius: '5px', background: '#f9f9f9' },
//   viewButton: { padding: '5px 10px', cursor: 'pointer', marginTop: '10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' },
//   profileDetails: { textAlign: 'center' },
//   backButton: { padding: '10px 20px', cursor: 'pointer', marginBottom: '20px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' },
//   profileImage: { width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' },
// };

// export default SearchMatchmaking;

