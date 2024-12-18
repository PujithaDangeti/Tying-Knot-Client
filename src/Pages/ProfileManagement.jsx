// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// // Styled components for layout and styling
// const ProfileContainer = styled.div`
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 2rem auto;
//   width: 80%;
//   max-width: 900px;
// `;

// const ProfileCard = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 2rem;
//   border: 1px solid #ddd;
//   padding: 1rem;
//   border-radius: 8px;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   object-fit: cover;
//   margin-right: 1rem;
// `;

// const ProfileInfo = styled.div`
//   flex-grow: 1;
// `;

// const ProfileName = styled.h3`
//   font-size: 1.5rem;
//   margin: 0;
// `;

// const ProfileDetails = styled.p`
//   font-size: 1rem;
//   color: #555;
// `;

// const ViewProfileButton = styled(NavLink)`
//   background-color: #007bff;
//   color: white;
//   text-decoration: none;
//   padding: 0.8rem 1.5rem;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   display: inline-block;
//   margin-top: 1rem;
  
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ProfileManagement = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch profiles data from the JSON API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await fetch("https://mocki.io/v1/1bf2a7fe-668a-4497-8872-1ead8b3a8a69"); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error("Failed to fetch profiles");
//         }
//         const data = await response.json();
//         setProfiles(data); // Assuming the API returns an array of profiles
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   if (loading) {
//     return <div>Loading profiles...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <ProfileContainer>
//       <h2>Browse Profiles</h2>
//       {profiles.length === 0 ? (
//         <p>No profiles available</p>
//       ) : (
//         profiles.map((profile) => (
//           <ProfileCard key={profile.id}>
//             <ProfileImage src={profile.image || "https://via.placeholder.com/150"} alt={profile.name} />
//             <ProfileInfo>
//               <ProfileName>{profile.name}</ProfileName>
//               <ProfileDetails>{profile.details}</ProfileDetails>
//               <NavLink to={`/profile/${profile.id}`}>
//                 <ViewProfileButton>View Profile</ViewProfileButton>
//               </NavLink>
//             </ProfileInfo>
//           </ProfileCard>
//         ))
//       )}
//     </ProfileContainer>
//   );
// };

// export default ProfileManagement;


// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// // Styled components for layout and styling
// const ProfileContainer = styled.div`
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 2rem auto;
//   width: 80%;
//   max-width: 900px;
// `;

// const ProfileCard = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 2rem;
//   border: 1px solid #ddd;
//   padding: 1rem;
//   border-radius: 8px;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   object-fit: cover;
//   margin-right: 1rem;
// `;

// const ProfileInfo = styled.div`
//   flex-grow: 1;
// `;

// const ProfileName = styled.h3`
//   font-size: 1.5rem;
//   margin: 0;
// `;

// const ProfileDetails = styled.p`
//   font-size: 1rem;
//   color: #555;
// `;

// const ViewProfileButton = styled(NavLink)`
//   background-color: #007bff;
//   color: white;
//   text-decoration: none;
//   padding: 0.8rem 1.5rem;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   display: inline-block;
//   margin-top: 1rem;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ProfileManagement = () => {
//   const [profiles, setProfiles] = useState([]); // Holds the profile data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error handling

//   // Fetch profiles data from the API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await fetch("https://mocki.io/v1/1bf2a7fe-668a-4497-8872-1ead8b3a8a69");
//         if (!response.ok) {
//           throw new Error("Failed to fetch profiles");
//         }

//         const data = await response.json();

//         // Validate that the response is an array
//         if (Array.isArray(data)) {
//           setProfiles(data);
//         } else {
//           console.warn("API response is not an array:", data);
//           setProfiles([]); // Default to an empty array if the data is invalid
//         }
//       } catch (err) {
//         console.error("Error fetching profiles:", err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   // Render loading state
//   if (loading) {
//     return <div>Loading profiles...</div>;
//   }

//   // Render error state
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Render profiles or fallback message
//   return (
//     <ProfileContainer>
//       <h2>Browse Profiles</h2>
//       {Array.isArray(profiles) && profiles.length > 0 ? (
//         profiles.map((profile) => (
//           <ProfileCard key={profile.id}>
//             <ProfileImage
//               src={profile.image || "https://via.placeholder.com/150"}
//               alt={profile.name || "Profile Image"}
//             />
//             <ProfileInfo>
//               <ProfileName>{profile.name || "No Name Provided"}</ProfileName>
//               <ProfileDetails>{profile.details || "No details available."}</ProfileDetails>
//               <ViewProfileButton to={`/profile/${profile.id}`}>
//                 View Profile
//               </ViewProfileButton>
//             </ProfileInfo>
//           </ProfileCard>
//         ))
//       ) : (
//         <p>No profiles available</p>
//       )}
//     </ProfileContainer>
//   );
// };

// export default ProfileManagement;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components
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
  align-items: center;
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
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

const ProfileDetails = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ViewProfileButton = styled(NavLink)`
  background-color:  #ff7f50;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color:rgb(154, 156, 2);
  }
`;

const ProfileManagement = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c");
        if (!response.ok) {
          throw new Error("Failed to fetch profiles");
        }
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.users)) {
          setProfiles(data.users);
        } else {
          console.warn("Invalid API response");
          setProfiles([]);
        }
      } catch (err) {
        console.error("Error fetching profiles:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <div>Loading profiles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProfileContainer>
      <h2>Browse Profiles</h2>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileCard key={profile.id || Math.random()}>
            <ProfileImage
              src={profile.image || "https://via.placeholder.com/150"}
              alt={profile.name || "Profile Image"}
            />
            <ProfileInfo>
              <ProfileName>{profile.name || "No Name Provided"}</ProfileName>
              <ProfileDetails>{profile.details || "No details available"}</ProfileDetails>
              <ViewProfileButton to={`/profile/${profile.id}`}>
                View Profile
              </ViewProfileButton>
            </ProfileInfo>
          </ProfileCard>
        ))
      ) : (
        <p>No profiles available</p>
      )}
    </ProfileContainer>
  );
};

export default ProfileManagement;
