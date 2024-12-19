// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";

// // Styled components
// const ProfileDetailContainer = styled.div`
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   width: 80%;
//   max-width: 900px;
//   margin: 2rem auto;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;

// const ProfileName = styled.h3`
//   font-size: 2rem;
//   margin: 0;
// `;

// const ProfileDetails = styled.p`
//   font-size: 1.2rem;
//   color: #555;
// `;

// const ProfileDetail = () => {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch profile data based on the profile ID
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch(`https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c`); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error("Profile not found");
//         }
//         const data = await response.json();
//         setProfile(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [id]);

//   if (loading) {
//     return <div>Loading profile...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!profile) {
//     return <div>Profile not found!</div>;
//   }

//   return (
//     <ProfileDetailContainer>
//       <ProfileImage src={profile.image || "https://via.placeholder.com/150"} alt={profile.name} />
//       <ProfileName>{profile.name}</ProfileName>
//       <ProfileDetails>{profile.details}</ProfileDetails>
//     </ProfileDetailContainer>
//   );
// };

// export default ProfileDetail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";

// // Styled components
// const ProfileDetailContainer = styled.div`
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   width: 80%;
//   max-width: 900px;
//   margin: 2rem auto;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;

// const ProfileName = styled.h3`
//   font-size: 2rem;
//   margin: 0;
// `;

// const ProfileDetails = styled.p`
//   font-size: 1.2rem;
//   color: #555;
// `;

// const profileImages = {
//   1: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg",
//   2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpoWSi1dRcZYTrlzbPb0zmfhh5SBbG2fFg&s", //women
//   3: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
//   4: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid",//women 6 8 10 12 14 16 18 20 22 24 26 28 30
//   5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s",
//   6: "https://c8.alamy.com/comp/CYMFBW/indian-woman-in-traditional-clothing-CYMFBW.jpg",
//   7: "https://i.pinimg.com/236x/89/d9/20/89d9202ca81e5cf7e80a37555b62b128.jpg",
//   8: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-390257-1065084.jpg&fm=jpg",
//   9: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIaHg8U4QQ2nzlNIung_gsbfXsAZZBwVv8w&s",
//   10: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWNv9p4_fs8vH8DoZLdVCZztN4N5T92g0UA&s",
//   11: "https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
//   12: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNO5JUi7mrm8z3A5XiioyXVqgqh9RZNdpJQ&s",
//   13: "https://images.unsplash.com/photo-1701365676249-9d7ab5022dec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
//   14: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwMZLm8emckRmrtFwTbtZwFcefR3gkgbpVQ&s",
//   15 : "https://thumbs.dreamstime.com/b/young-man-posing-studio-yellow-shirt-jeans-portrait-young-indian-man-jeans-posing-grey-background-296162716.jpg",
//   16: "https://st2.depositphotos.com/4153545/8176/i/450/depositphotos_81765634-stock-photo-young-woman-at-outdoors.jpg",
//   18 : "https://preview.redd.it/photorealistic-indian-women-in-tradition-clothing-v0-e5kpdxtzzbec1.png?width=640&crop=smart&auto=webp&s=46561cbed75d314ac0b0736d291c16dd70878fc4",
//   17 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sd7yStPYdLYmv16W2l3yfUIlO_EmZnUeMg&s",
//   19: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7220.jpg",
//   20 : "https://imgcdn.stablediffusionweb.com/2024/10/23/a92a4995-4984-4a22-b3a4-36b0ef24f083.jpg",
//   21 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AFb_C2l7KF7Cbiv4pvOLGgyKLxwRNd98fQ8Yk1sDTK7uu1XhJrTbJBSgbO7RMpd8u_U&usqp=CAU",
//   22 : "https://static.vecteezy.com/system/resources/thumbnails/037/980/210/small_2x/ai-generated-a-indian-women-looks-pretty-in-orange-and-red-saree-gudi-padwa-traditional-clothing-image-photo.jpeg",
//   23 : "https://pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive.jpg",
//   24 : "https://media.istockphoto.com/id/1279550163/photo/young-woman-diwali-celebrate-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=BJsIRBI0D4NyFTrn92H5FIUIcqih0s5oT9uQAMaA-Uo=",
//   25: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg",
//   26: "https://t3.ftcdn.net/jpg/01/87/83/26/360_F_187832626_Z0K54NuFDzPM10NZw6gWdRYMC763xJQM.jpg",
//   27: "https://img.freepik.com/free-photo/indian-man-student-shirt-posed-outdoor_627829-2276.jpg",
//   28 : "https://media.istockphoto.com/id/1395880805/photo/indoor-close-up-portrait-of-beauty-asian-indian-serene-young-woman-sitting-near-the-window.jpg?s=612x612&w=0&k=20&c=HFFaDToYEashf-L8YCZh3y6mlTaOVHvkBqDsKN4mro0=",
//   29 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVxzhI8lUvwq_ZpIsJLS2lz-EfUNrDMVIoCGIpvJGPbJ3Avtg3hxYw_X4-h-ydbWZDCg&usqp=CAU",
//   30 : "https://media.istockphoto.com/id/1024119748/photo/beautiful-yoga-girl-sitting-on-bench-in-park-stock-image.jpg?s=612x612&w=0&k=20&c=NFyg3AywFie1zSsQ2OS5xipYx3h0YtwroI0nLqB_u7Y="
//   // Add more mappings
// };

// const getProfileImage = (id) => profileImages[id] || "https://via.placeholder.com/150";

// const ProfileDetail = () => {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await fetch("https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c");
//         if (!response.ok) throw new Error("Failed to fetch profile");

//         const data = await response.json();
//         const user = data.users.find((user) => user.id === parseInt(id, 10));
//         setProfile(user || null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, [id]);

//   if (loading) return <div>Loading profile...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!profile) return <div>Profile not found!</div>;

//   return (
//     <ProfileDetailContainer>
//       <ProfileImage src={getProfileImage(profile.id)} alt={profile.name} />
//       <ProfileName>{profile.name}</ProfileName>
//       <ProfileDetails>{profile.details}</ProfileDetails>
//     </ProfileDetailContainer>
//   );
// };

// export default ProfileDetail;





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

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 2rem;
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
        const response = await fetch("https://mocki.io/v1/fb5bcf7a-adf3-4ed7-9555-fad92443af6c");
        if (!response.ok) {
          throw new Error("Failed to fetch profile details");
        }
        const data = await response.json();
        const userProfile = data.users.find((user) => user.id === parseInt(id));
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
        <ProfileImage
          src={profile.image || "https://via.placeholder.com/150"}
          alt={profile.name || "Profile Image"}
        />
        
        <div>
          <ProfileName>{profile.name}</ProfileName>
        </div>
      </ProfileHeader>
      <ProfileDetails>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Profession:</strong> {profile.profession}</p>
        <p><strong>Hobbies:</strong> {profile.hobbies}</p>
      </ProfileDetails>
      <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
    </DetailContainer>
  );
};

export default ProfileDetail;
