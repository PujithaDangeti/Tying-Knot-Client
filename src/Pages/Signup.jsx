// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// // const API_URL = "https://tyingknots-serverside-2.onrender.com/Profiles";
// const API_URL = "http://localhost:3000/Profiles";

// // Styled Components
// const Container = styled.div`
//   width: 100%;
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const FieldSet = styled.fieldset`
//   border: 1px solid #ccc;
//   padding: 20px;
//   border-radius: 8px;
// `;

// const Legend = styled.legend`
//   font-size: 1.5em;
//   margin-bottom: 10px;
// `;

// const Field = styled.div`
//   margin-bottom: 15px;
//   position: relative;
// `;

// const Label = styled.label`
//   font-size: 1em;
//   display: block;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   width: 90%;
//   padding: 10px;
//   font-size: 1em;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const PasswordToggle = styled.span`
//   position: absolute;
//   top: 50%;
//   right: 5%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   font-size: 1.2em;
// `;

// const Buttons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #ff7f50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1em;

//   &:hover {
//     background-color: #ff7f50;
//   }

//   &:disabled {
//     background-color: #ddd;
//     cursor: not-allowed;
//   }
// `;

// const Error = styled.span`
//   color: red;
//   font-size: 0.9em;
//   margin-top: 5px;
//   display: block;
// `;

// const SuccessMessage = styled.div`
//   margin-top: 20px;
//   background-color: #4caf50;
//   color: white;
//   padding: 10px;
//   border-radius: 4px;
//   text-align: center;
//   font-size: 1.2em;
// `;

// function Form() {
//   const [Profile, setProfile] = useState([]);
//   const [newProfile, setNewProfile] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [editProfile, setEditProfile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message
//   const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setProfile(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
//     } catch (error) {
//       console.error("Error Fetching Profile", error);
//     }
//   };

//   const validateProfile = (profile) => {
//     const newErrors = {};
//     const emailExists = Profile.some(
//       (p) => p.email === profile.email && (!editProfile || p.id !== editProfile.id)
//     );

//     if (!profile.name.trim()) newErrors.name = "Name is required.";
//     if (!profile.email.trim()) newErrors.email = "Email is required.";
//     else if (!/\S+@\S+\.\S+/.test(profile.email))
//       newErrors.email = "Invalid email format.";
//     else if (emailExists) newErrors.email = "Email already exists.";

//     if (!profile.password.trim()) newErrors.password = "Password is required.";
//     if (profile.password !== profile.confirmpassword)
//       newErrors.password = "Passwords do not match.";
//     else if (profile.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const addProfile = async (event) => {
//     event.preventDefault();
//     if (!validateProfile(newProfile)) return;

//     try {
//       const response = await axios.post(API_URL, newProfile);
//       setProfile([...Profile, response.data]);
//       setNewProfile({ name: "", email: "", password: "", confirmpassword: "" });
//       setErrors({});
//       setSuccessMessage("Sign-up successful! Redirecting to login...");

//       setTimeout(() => {
//         navigate("/Login");
//       }, 2000);
//     } catch (error) {
//       console.error("Error adding Profile", error);
//     }
//   };

//   return (
//     <Container>
//       <h2>Sign-Up Form</h2>
//       <form onSubmit={addProfile}>
//         <FieldSet>
//           <Legend>User Details</Legend>

//           <Field>
//             <Label>Name:</Label>
//             <Input
//               type="text"
//               value={newProfile.name}
//               onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
//             />
//             {errors.name && <Error>{errors.name}</Error>}
//           </Field>

//           <Field>
//             <Label>Email:</Label>
//             <Input
//               type="email"
//               value={newProfile.email}
//               onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
//             />
//             {errors.email && <Error>{errors.email}</Error>}
//           </Field>

//           <Field>
//             <Label>Password:</Label>
//             <Input
//               type={showPassword ? "text" : "password"}
//               value={newProfile.password}
//               onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
//             />
//             <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? "👁️" : "👁️‍🗨️"}
//             </PasswordToggle>
//             {errors.password && <Error>{errors.password}</Error>}
//           </Field>

//           <Field>
//             <Label>Confirm Password:</Label>
//             <Input
//               type={showConfirmPassword ? "text" : "password"}
//               value={newProfile.confirmpassword}
//               onChange={(e) => setNewProfile({ ...newProfile, confirmpassword: e.target.value })}
//             />
//             <PasswordToggle onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//               {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
//             </PasswordToggle>
//             {errors.password && <Error>{errors.password}</Error>}
//           </Field>

//           <Buttons>
//             <Button type="submit">Sign-Up</Button>
//           </Buttons>
//         </FieldSet>
//       </form>

//       {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//     </Container>
//   );
// }

// export default Form;




// //Testing


// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import styled from "styled-components";

// // // const API_URL = "https://tyingknots-serverside-2.onrender.com/Profiles";
// // const API_URL = "http://localhost:3000/Profiles";

// // // Styled Components
// // const Container = styled.div`
// //   width: 100%;
// //   max-width: 500px;
// //   margin: 0 auto;
// //   padding: 20px;
// // `;

// // const FieldSet = styled.fieldset`
// //   border: 1px solid #ccc;
// //   padding: 20px;
// //   border-radius: 8px;
// // `;

// // const Legend = styled.legend`
// //   font-size: 1.5em;
// //   margin-bottom: 10px;
// // `;

// // const Field = styled.div`
// //   margin-bottom: 15px;
// // `;

// // const Label = styled.label`
// //   font-size: 1em;
// //   display: block;
// //   margin-bottom: 5px;
// // `;

// // const Input = styled.input`
// //   width: 90%;
// //   padding: 10px;
// //   font-size: 1em;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// // `;

// // const Buttons = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   gap: 10px;
// // `;

// // const Button = styled.button`
// //   padding: 10px 20px;
// //   background-color: #ff7f50;
// //   color: white;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   font-size: 1em;

// //   &:hover {
// //     background-color: #ff7f50;
// //   }

// //   &:disabled {
// //     background-color: #ddd;
// //     cursor: not-allowed;
// //   }
// // `;

// // const Error = styled.span`
// //   color: red;
// //   font-size: 0.9em;
// //   margin-top: 5px;
// //   display: block;
// // `;

// // const SuccessMessage = styled.div`
// //   margin-top: 20px;
// //   background-color: #4caf50;
// //   color: white;
// //   padding: 10px;
// //   border-radius: 4px;
// //   text-align: center;
// //   font-size: 1.2em;
// // `;

// // function Form() {
// //   const [Profile, setProfile] = useState([]);
// //   const [newProfile, setNewProfile] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     confirmpassword: "",
// //   });
// //   const [editProfile, setEditProfile] = useState(null);
// //   const [errors, setErrors] = useState({});
// //   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// //   const [showPassword, setShowPassword] = useState(false); // Toggle for showing password
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get(API_URL);
// //       setProfile(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
// //     } catch (error) {
// //       console.error("Error Fetching Profile", error);
// //     }
// //   };

// //   const validateProfile = (profile) => {
// //     const newErrors = {};

// //     // Check if email already exists in the Profile array
// //     const emailExists = Profile.some((p) => p.email === profile.email);

// //     if (!profile.name.trim()) newErrors.name = "Name is required.";
// //     if (!profile.email.trim()) newErrors.email = "Email is required.";
// //     else if (!/\S+@\S+\.\S+/.test(profile.email))
// //       newErrors.email = "Invalid email format.";
// //     else if (emailExists)
// //       newErrors.email = "This email is already in use. Please use a different email.";

// //     if (!profile.password.trim()) newErrors.password = "Password is required.";
// //     else if (profile.password.length < 6)
// //       newErrors.password = "Password must be at least 6 characters.";

// //     if (profile.password !== profile.confirmpassword)
// //       newErrors.confirmpassword = "Passwords do not match.";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const addProfile = async (event) => {
// //     event.preventDefault();

// //     // Validate the new profile
// //     if (!validateProfile(newProfile)) return;

// //     try {
// //       const response = await axios.post(API_URL, newProfile);
// //       setProfile([...Profile, response.data]); // Add new profile to the state
// //       setNewProfile({ name: "", email: "", password: "", confirmpassword: "" });
// //       setErrors({});
// //       setSuccessMessage("Sign-up successful! Redirecting to login...");

// //       setTimeout(() => {
// //         navigate("/Login");
// //       }, 2000);
// //     } catch (error) {
// //       console.error("Error adding Profile", error);
// //     }
// //   };

// //   const updateProfile = async (event) => {
// //     event.preventDefault();
// //     if (!validateProfile(editProfile)) return;

// //     try {
// //       const response = await axios.put(`${API_URL}/${editProfile.id}, editProfile`);
// //       setProfile(Profile.map((p) => (p.id === response.data.id ? response.data : p)));
// //       setEditProfile(null);
// //       setErrors({});
// //     } catch (error) {
// //       console.error("Error updating Profile", error);
// //     }
// //   };

// //   const deleteProfile = async (id) => {
// //     try {
// //       await axios.delete(`${API_URL}/${id}`);
// //       setProfile(Profile.filter((p) => p.id !== id));
// //     } catch (error) {
// //       console.error("Error deleting Profile", error);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <h2>Sign-Up Form</h2>
// //       <form onSubmit={addProfile}>
// //         <FieldSet>
// //           <Legend>User Details</Legend>

// //           <Field>
// //             <Label>Name:</Label>
// //             <Input
// //               type="text"
// //               value={newProfile.name}
// //               onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
// //             />
// //             {errors.name && <Error>{errors.name}</Error>}
// //           </Field>

// //           <Field>
// //             <Label>Email:</Label>
// //             <Input
// //               type="email"
// //               value={newProfile.email}
// //               onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
// //             />
// //             {errors.email && <Error>{errors.email}</Error>}
// //           </Field>

// //           <Field>
// //             <Label>Password:</Label>
// //             <Input
// //               type={showPassword ? "text" : "password"} // Toggle visibility for password field
// //               value={newProfile.password}
// //               onChange={(e) => setNewProfile({ ...newProfile, password: e.target.value })}
// //             />
// //             <button
// //               type="button"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"} Password
// //             </button>
// //             {errors.password && <Error>{errors.password}</Error>}
// //           </Field>

// //           <Field>
// //             <Label>Confirm Password:</Label>
// //             <Input
// //               type="password" // Keep confirm password field hidden
// //               value={newProfile.confirmpassword}
// //               onChange={(e) => setNewProfile({ ...newProfile, confirmpassword: e.target.value })}
// //             />
// //             {errors.confirmpassword && <Error>{errors.confirmpassword}</Error>}
// //           </Field>

// //           <Buttons>
// //             <Button type="submit">Sign-Up</Button>
// //           </Buttons>
// //         </FieldSet>
// //       </form>

// //       {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

// //       {editProfile && (
// //         <div>
// //           <h3>Edit Profile</h3>
// //           <form onSubmit={updateProfile}>
// //             <FieldSet>
// //               <Legend>Edit Personal Details</Legend>
// //               <Field>
// //                 <Label>Name:</Label>
// //                 <Input
// //                   type="text"
// //                   value={editProfile.name}
// //                   onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
// //                 />
// //               </Field>
// //               <Field>
// //                 <Label>Email:</Label>
// //                 <Input
// //                   type="email"
// //                   value={editProfile.email}
// //                   onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
// //                 />
// //               </Field>
// //               <Field>
// //                 <Label>Password:</Label>
// //                 <Input
// //                   type="password"
// //                   value={editProfile.password}
// //                   onChange={(e) => setEditProfile({ ...editProfile, password: e.target.value })}
// //                 />
// //               </Field>
// //               <Buttons>
// //                 <Button type="submit">Update</Button>
// //                 <Button type="button" onClick={() => setEditProfile(null)}>
// //                   Cancel
// //                 </Button>
// //               </Buttons>
// //             </FieldSet>
// //           </form>
// //         </div>
// //       )}
// //     </Container>
// //   );
// // }

// // export default Form;


//Testing

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const API_URL = "http://localhost:3000/Profiles";

// // Styled Components (same as your original code)
// const Container = styled.div`
//   width: 100%;
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const FieldSet = styled.fieldset`
//   border: 1px solid #ccc;
//   padding: 20px;
//   border-radius: 8px;
// `;

// const Legend = styled.legend`
//   font-size: 1.5em;
//   margin-bottom: 10px;
// `;

// const Field = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   font-size: 1em;
//   display: block;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   width: 90%;
//   padding: 10px;
//   font-size: 1em;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Buttons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #ff7f50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1em;

//   &:hover {
//     background-color: #ff7f50;
//   }

//   &:disabled {
//     background-color: #ddd;
//     cursor: not-allowed;
//   }
// `;

// const ToggleButton = styled(Button)`
//   background-color: #ff7f50;
//   margin-left: 10px;

//   &:hover {
//     background-color: #ff7f50;
//   }
// `;

// const Error = styled.span`
//   color: red;
//   font-size: 0.9em;
//   margin-top: 5px;
//   display: block;
// `;

// function Form() {
//   const [newProfile, setNewProfile] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const validateProfile = (profile) => {
//     const newErrors = {};
//     if (!profile.name.trim()) newErrors.name = "Name is required.";
//     if (!profile.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())
//     ) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!profile.password.trim()) newErrors.password = "Password is required.";
//     if (profile.password !== profile.confirmpassword)
//       newErrors.confirmpassword = "Passwords do not match.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const checkEmailUnique = async (email) => {
//     try {
//       const response = await axios.get(API_URL);
//       const profiles = response.data || [];
//       const emailExists = profiles.some((profile) => profile.email === email);
//       if (emailExists) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           email: "This email is already registered.",
//         }));
//         return false;
//       }
//       return true;
//     } catch (error) {
//       console.error("Error checking email uniqueness:", error);
//       return false;
//     }
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     if (!validateProfile(newProfile)) return;

//     const isUnique = await checkEmailUnique(newProfile.email);
//     if (!isUnique) return;

//     try {
//       await axios.post(API_URL, newProfile);
//       localStorage.setItem("username", newProfile.name);
//       navigate("/dashboard"); // Navigate to the dashboard
//     } catch (error) {
//       console.error("Error signing up:", error);
//     }
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSignUp}>
//         <FieldSet>
//           <Legend>Sign-Up Form</Legend>
//           <Field>
//             <Label>Name:</Label>
//             <Input
//               type="text"
//               value={newProfile.name}
//               onChange={(e) =>
//                 setNewProfile({ ...newProfile, name: e.target.value })
//               }
//             />
//             {errors.name && <Error>{errors.name}</Error>}
//           </Field>
//           <Field>
//             <Label>Email:</Label>
//             <Input
//               type="email"
//               value={newProfile.email}
//               onChange={(e) =>
//                 setNewProfile({ ...newProfile, email: e.target.value })
//               }
//             />
//             {errors.email && <Error>{errors.email}</Error>}
//           </Field>
//           <Field>
//             <Label>Password:</Label>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 value={newProfile.password}
//                 onChange={(e) =>
//                   setNewProfile({ ...newProfile, password: e.target.value })
//                 }
//               />
//               <ToggleButton
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </ToggleButton>
//             </div>
//             {errors.password && <Error>{errors.password}</Error>}
//           </Field>
//           <Field>
//             <Label>Confirm Password:</Label>
//             <Input
//               type={showPassword ? "text" : "password"}
//               value={newProfile.confirmpassword}
//               onChange={(e) =>
//                 setNewProfile({ ...newProfile, confirmpassword: e.target.value })
//               }
//             />
//             {errors.confirmpassword && <Error>{errors.confirmpassword}</Error>}
//           </Field>
//           <Buttons>
//             <Button type="submit">Sign-Up</Button>
//           </Buttons>
//         </FieldSet>
//       </form>
//     </Container>
//   );
// }

// export default Form;




//mail testing




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Import EmailJS

// Styled Components
const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
`;

const Legend = styled.legend`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Field = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ToggleButton = styled.button`
  margin-left: 10px;
  padding: 0.5rem;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Buttons = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const API_URL = "http://localhost:3000/Profiles";

function Form() {
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateProfile = (profile) => {
    const newErrors = {};
    if (!profile.name.trim()) newErrors.name = "Name is required.";
    if (!profile.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())) {
      newErrors.email = "Invalid email format.";
    }
    if (!profile.password.trim()) newErrors.password = "Password is required.";
    if (profile.password !== profile.confirmpassword)
      newErrors.confirmpassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkEmailUnique = async (email) => {
    try {
      const response = await axios.get(API_URL);
      const profiles = response.data || [];
      const emailExists = profiles.some((profile) => profile.email === email);
      if (emailExists) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This email is already registered.",
        }));
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false;
    }
  };

  const sendGreetingEmail = (profile) => {
    const templateParams = {
      name: profile.name,
      email: profile.email,
    };

    emailjs
      .send("service_0vbgauu", "template_ppli7yr", templateParams, "s7V4n4J3dmBJf4V_Y")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!validateProfile(newProfile)) return;

    const isUnique = await checkEmailUnique(newProfile.email);
    if (!isUnique) return;

    try {
      await axios.post(API_URL, newProfile);
      sendGreetingEmail(newProfile); // Send the greeting email
      localStorage.setItem("username", newProfile.name);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <FieldSet>
          <Legend>Sign-Up Form</Legend>
          <Field>
            <Label>Name:</Label>
            <Input
              type="text"
              value={newProfile.name}
              onChange={(e) =>
                setNewProfile({ ...newProfile, name: e.target.value })
              }
            />
            {errors.name && <Error>{errors.name}</Error>}
          </Field>
          <Field>
            <Label>Email:</Label>
            <Input
              type="email"
              value={newProfile.email}
              onChange={(e) =>
                setNewProfile({ ...newProfile, email: e.target.value })
              }
            />
            {errors.email && <Error>{errors.email}</Error>}
          </Field>
          <Field>
            <Label>Password:</Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                type={showPassword ? "text" : "password"}
                value={newProfile.password}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, password: e.target.value })
                }
              />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </ToggleButton>
            </div>
            {errors.password && <Error>{errors.password}</Error>}
          </Field>
          <Field>
            <Label>Confirm Password:</Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={newProfile.confirmpassword}
              onChange={(e) =>
                setNewProfile({ ...newProfile, confirmpassword: e.target.value })
              }
            />
            {errors.confirmpassword && <Error>{errors.confirmpassword}</Error>}
          </Field>
          <Buttons>
            <Button type="submit">Sign-Up</Button>
          </Buttons>
        </FieldSet>
      </form>
    </Container>
  );
}

export default Form;
