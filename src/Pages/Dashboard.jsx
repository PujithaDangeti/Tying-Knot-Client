// // import React, { useState } from 'react'
// // import axios from 'axios'
// // import styled from 'styled-components'
// // import {Navigate, Navlink, useLocation, useNavigate} from 'react-router-dom'


// // let API_URL = ''

// // let email;
// // let name;

// // const Dashboard = () =>{

// // }

// // useEffect(()=>{})


// // const location = useLocation();
// // const {state} = location;
// // useremail = state.email

// // export default Dashboard



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useNavigate, useLocation } from 'react-router-dom';

// // Styled Components
// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const Sidebar = styled.div`
//   width: 250px;
//   background-color: #6200ea;
//   color: white;
//   padding: 1.5rem;
//   position: fixed;
//   height: 100%;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// const SidebarItem = styled.div`
//   margin-bottom: 1.5rem;
//   cursor: pointer;
//   font-size: 1.2rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Content = styled.div`
//   margin-left: 260px;
//   padding: 2rem;
//   flex: 1;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-bottom: 2rem;
//   border-bottom: 1px solid #ccc;
// `;

// const Title = styled.h1`
//   color: #333;
// `;

// const ProfilePic = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2px solid #6200ea;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 0.8rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const FriendRequestContainer = styled.div`
//   margin-top: 2rem;
//   background-color: #f4f4f9;
//   padding: 1.5rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const FriendRequestItem = styled.div`
//   margin-bottom: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const FriendRequestButton = styled(Button)`
//   background-color: #28a745;
//   &:hover {
//     background-color: #218838;
//   }
// `;

// // Dashboard Component
// const Dashboard = () => {
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '',
//     profilePicture: '',
//     favorite_game: '',
//   });

//   const [friendRequests, setFriendRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const location = useLocation();
//   const { state } = location;
//   const userEmail = state?.email || ''; // Get the email from the state

//   useEffect(() => {
//     if (!userEmail) {
//       navigate('/login'); // If no email, redirect to login
//       return;
//     }

//     // Fetch the user data from the server using Axios
//     axios
//       .get(`${API_URL}/user/${userEmail}`)
//       .then((response) => {
//         setUserData(response.data);
//         setFriendRequests(response.data.friendRequests || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//         setLoading(false);
//       });
//   }, [userEmail, navigate]);

//   const handleLogout = () => {
//     // Clear user session from localStorage and redirect to login page
//     localStorage.removeItem('userProfile');
//     navigate('/login');
//   };

//   const handleEditProfile = () => {
//     navigate('/profile', {
//       state: { email: userData.email },
//     });
//   };

//   const handleAcceptFriendRequest = (id) => {
//     setFriendRequests(friendRequests.filter((request) => request.id !== id));
//     alert(`Friend request from ${id} accepted!`);
//     // Send request to backend for accepting the friend request
//     axios.post(`${API_URL}/friend/accept`, { userId: id });
//   };

//   const handleRejectFriendRequest = (id) => {
//     setFriendRequests(friendRequests.filter((request) => request.id !== id));
//     alert(`Friend request from ${id} rejected!`);
//     // Send request to backend for rejecting the friend request
//     axios.post(`${API_URL}/friend/reject`, { userId: id });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <DashboardContainer>
//       {/* Sidebar */}
//       <Sidebar>
//         <SidebarItem onClick={handleEditProfile}>Edit Profile</SidebarItem>
//         <SidebarItem onClick={handleLogout}>Logout</SidebarItem>
//       </Sidebar>

//       {/* Content Area */}
//       <Content>
//         <Header>
//           <Title>Welcome, {userData.username}</Title>
//           <ProfilePic
//             src={userData.profilePicture || 'https://via.placeholder.com/80'}
//             alt="Profile"
//           />
//         </Header>

//         {/* Profile Information */}
//         <div>
//           <h3>Email</h3>
//           <p>{userData.email}</p>
//           <h3>Favorite Game</h3>
//           <p>{userData.favorite_game}</p>
//         </div>

//         {/* Friend Requests Section */}
//         <FriendRequestContainer>
//           <h3>Friend Requests</h3>
//           {friendRequests.length === 0 ? (
//             <p>No friend requests.</p>
//           ) : (
//             friendRequests.map((request) => (
//               <FriendRequestItem key={request.id}>
//                 <span>{request.name}</span>
//                 <div>
//                   <FriendRequestButton
//                     onClick={() => handleAcceptFriendRequest(request.id)}
//                   >
//                     Accept
//                   </FriendRequestButton>
//                   <Button onClick={() => handleRejectFriendRequest(request.id)}>
//                     Reject
//                   </Button>
//                 </div>
//               </FriendRequestItem>
//             ))
//           )}
//         </FriendRequestContainer>
//       </Content>
//     </DashboardContainer>
//   );
// };

// export default Dashboard;

// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const DashboardContainer = styled.div`
//   padding: 2rem;
//   background-color: #f8f9fa;
//   height: 100vh;
// `;

// const WelcomeMessage = styled.h2`
//   color: #333;
// `;

// const Dashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate

//   const userEmail = location.state?.email || 'User'; // Get email from state

//   useEffect(() => {
//     // If no email is provided in the location state, redirect to login page
//     if (!userEmail) {
//       navigate('/login');
//     }
//   }, [userEmail, navigate]);

//   return (
//     <DashboardContainer>
//       <WelcomeMessage>Welcome, {userEmail}!</WelcomeMessage>
//       {/* Add more dashboard features here */}
//     </DashboardContainer>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  height: 100vh;
`;

const WelcomeMessage = styled.h2`
  color: #333;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 100;
  margin-top: 1rem;
`;

const HamburgerLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: #333;
  border-radius: 10px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  padding: 2rem;
  display: ${(props) => (props.open ? 'block' : 'none')};
  transition: transform 0.3s ease-in-out;
  z-index: 50;
`;

const SidebarLink = styled.a`
  display: block;
  padding: 1rem;
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  &:hover {
    background-color: #444;
  }
`;

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  const userEmail = location.state?.email || 'User'; // Get email from state

  useEffect(() => {
    // If no email is provided in the location state, redirect to login page
    if (!userEmail) {
      navigate('/login');
    }
  }, [userEmail, navigate]);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to login after logging out
  };

  return (
    <DashboardContainer>
      <HamburgerMenu onClick={handleToggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>

      <Sidebar open={menuOpen}>
        <SidebarLink ><NavLink to="/profile">Profile</NavLink></SidebarLink>
        <SidebarLink href="/friend-requests">Friend Requests</SidebarLink>
        <SidebarLink href="#" onClick={handleLogout}>
          Logout
        </SidebarLink>
      </Sidebar>

      <WelcomeMessage><center>Welcome to the Tyingnots</center></WelcomeMessage>
        <center> <h2>"Find Your Perfect Match, Start Your Forever Today!"</h2></center>
      {/* Add more dashboard features here */}
    </DashboardContainer>
  );
};

export default Dashboard;
