// // import React, { useState, useEffect } from "react";
// // import styled from "styled-components";

// // const ProfileContainer = styled.div`
// //   max-width: 500px;
// //   margin: 50px auto;
// //   padding: 2rem;
// //   background-color: #fff;
// //   border-radius: 8px;
// //   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
// //   text-align: center;
// // `;

// // const Input = styled.input`
// //   display: block;
// //   margin: 1rem auto;
// //   padding: 0.8rem;
// //   font-size: 1rem;
// //   width: 100%;
// //   max-width: 300px;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// // `;

// // const Button = styled.button`
// //   padding: 0.8rem 1.5rem;
// //   background-color: #007bff;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   font-size: 1rem;
// //   cursor: pointer;
// //   margin: 1rem;

// //   &:hover {
// //     background-color: #0056b3;
// //   }
// // `;

// // const Message = styled.p`
// //   margin-top: 1rem;
// //   color: green;
// //   font-size: 1rem;
// // `;

// // const ProfileImageContainer = styled.div`
// //   position: relative;
// //   display: inline-block;
// // `;

// // const ProfileImage = styled.img`
// //   border-radius: 50%;
// //   width: 150px;
// //   height: 150px;
// //   object-fit: cover;
// //   margin-bottom: 1rem;
// // `;

// // const UploadLabel = styled.label`
// //   display: inline-block;
// //   margin-top: 0.5rem;
// //   background-color: #6c757d;
// //   color: white;
// //   padding: 0.5rem 1rem;
// //   border-radius: 5px;
// //   font-size: 0.9rem;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #5a6268;
// //   }
// // `;

// // const HiddenInput = styled.input`
// //   display: none;
// // `;

// // const Profile = ({ user }) => {
// //   const [name, setName] = useState("");
// //   const [image, setImage] = useState(null);
// //   const [message, setMessage] = useState(""); // To display the saved message

// //   // Load user data from localStorage or default
// //   useEffect(() => {
// //     const storedName = localStorage.getItem("profileName") || user?.name || "User Name";
// //     const storedImage = localStorage.getItem("profileImage");
// //     setName(storedName);
// //     if (storedImage) setImage(storedImage);
// //   }, [user]);

// //   // Handle profile image upload
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const imageUrl = URL.createObjectURL(file);
// //       setImage(imageUrl);
// //       localStorage.setItem("profileImage", imageUrl); // Save to localStorage
// //     }
// //   };

// //   const handleSave = () => {
// //     localStorage.setItem("profileName", name);
// //     setMessage("Your changes have been saved.");
// //     setTimeout(() => setMessage(""), 2000); // Clear the message after 2 seconds
// //   };

// //   const handleDelete = () => {
// //     localStorage.removeItem("profileName");
// //     localStorage.removeItem("profileImage");
// //     setName("");
// //     setImage(null);
// //     setMessage("Your profile has been deleted.");
// //     setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
// //   };

// //   return (
// //     <ProfileContainer>
// //       <h2>Welcome, {name}</h2>
// //       <ProfileImageContainer>
// //         <ProfileImage src={image || "https://via.placeholder.com/150"} alt="Profile" />
// //         <UploadLabel htmlFor="fileInput">Upload Image</UploadLabel>
// //         <HiddenInput
// //           type="file"
// //           id="fileInput"
// //           accept="image/*"
// //           onChange={handleImageChange}
// //         />
// //       </ProfileImageContainer>

// //       <Input
// //         type="text"
// //         placeholder="Enter your name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />

// //       <Button onClick={handleSave}>Save Changes</Button>
// //       <Button onClick={handleDelete} style={{ backgroundColor: "#dc3545" }}>
// //         Delete Profile
// //       </Button>

// //       {message && <Message>{message}</Message>} {/* Display message */}
// //     </ProfileContainer>
// //   );
// // };

// // export default Profile;


// //Testing


import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  max-width: 600px;
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
  border: 1px solid ${(props) => (props.error ? "#dc3545" : "#ccc")};
  border-radius: 5px;
  background-color: ${(props) => (props.error ? "#f8d7da" : "white")};
`;

const ErrorText = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
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

const DangerButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const BioContainer = styled.div`
  margin-top: 1.5rem;
  text-align: left;
`;

const BioField = styled.div`
  margin-bottom: 1rem;
`;

const Profile = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState({
    phone: "",
    age: "",
    profession: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditingBio, setIsEditingBio] = useState(false);

  // Ensure bio and name persist correctly
  useEffect(() => {
    const storedName = localStorage.getItem("username") || "User Name";
    const storedBio = localStorage.getItem("bio");
    const parsedBio = storedBio
      ? JSON.parse(storedBio)
      : { phone: "", age: "", profession: "", location: "" };

    setName(storedName);
    setBio(parsedBio);

    const isBioEmpty =
      !parsedBio.phone && !parsedBio.age && !parsedBio.profession && !parsedBio.location;
    setIsEditingBio(isBioEmpty);
  }, []);

  const validateBio = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const stringRegex = /^[a-zA-Z\s]+$/;

    if (!phoneRegex.test(bio.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!/^[1-9][0-9]$/.test(bio.age)) {
      newErrors.age = "Age must be a 2-digit number.";
    }
    if (!stringRegex.test(bio.profession.trim())) {
      newErrors.profession = "Profession must only contain letters and spaces.";
    }
    if (!stringRegex.test(bio.location.trim())) {
      newErrors.location = "Location must only contain letters and spaces.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBioSave = () => {
    if (validateBio()) {
      localStorage.setItem("bio", JSON.stringify(bio));
      setIsEditingBio(false);
    }
  };

  const handleBioDelete = () => {
    setBio({ phone: "", age: "", profession: "", location: "" });
    localStorage.removeItem("bio");
    setIsEditingBio(true);
  };

  return (
    <ProfileContainer>
      <h2>Welcome, {name}</h2>

      <Input
        type="text"
        value={name}
        onChange={(e) => {
          const updatedName = e.target.value;
          setName(updatedName);
          localStorage.setItem("username", updatedName);
        }}
        disabled={!isEditing}
      />

      {isEditing ? (
        <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
      ) : (
        <Button onClick={() => setIsEditing(true)} style={{ backgroundColor: "#28a745" }}>
          Edit Profile
        </Button>
      )}

      <BioContainer>
        <h3>Bio</h3>
        {isEditingBio ? (
          <>
            <BioField>
              <label>Phone Number:</label>
              <Input
                type="text"
                value={bio.phone}
                error={!!errors.phone}
                onChange={(e) => setBio({ ...bio, phone: e.target.value })}
              />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </BioField>
            <BioField>
              <label>Age:</label>
              <Input
                type="text"
                value={bio.age}
                error={!!errors.age}
                onChange={(e) => setBio({ ...bio, age: e.target.value })}
              />
              {errors.age && <ErrorText>{errors.age}</ErrorText>}
            </BioField>
            <BioField>
              <label>Profession:</label>
              <Input
                type="text"
                value={bio.profession}
                error={!!errors.profession}
                onChange={(e) => setBio({ ...bio, profession: e.target.value })}
              />
              {errors.profession && <ErrorText>{errors.profession}</ErrorText>}
            </BioField>
            <BioField>
              <label>Location:</label>
              <Input
                type="text"
                value={bio.location}
                error={!!errors.location}
                onChange={(e) => setBio({ ...bio, location: e.target.value })}
              />
              {errors.location && <ErrorText>{errors.location}</ErrorText>}
            </BioField>
            <Button onClick={handleBioSave}>Save Bio</Button>
            <DangerButton onClick={handleBioDelete}>Delete Bio</DangerButton>
          </>
        ) : (
          <>
            <p>Phone: {bio.phone || "N/A"}</p>
            <p>Age: {bio.age || "N/A"}</p>
            <p>Profession: {bio.profession || "N/A"}</p>
            <p>Location: {bio.location || "N/A"}</p>
            <Button onClick={() => setIsEditingBio(true)}>
              {bio.phone ? "Edit Bio" : "Add Bio"}
            </Button>
          </>
        )}
      </BioContainer>
    </ProfileContainer>
  );
};

export default Profile;



