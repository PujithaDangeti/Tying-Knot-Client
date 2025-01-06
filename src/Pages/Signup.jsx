// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import emailjs from "emailjs-com"; // Import EmailJS

// // Styled Components
// const Container = styled.div`
//   max-width: 500px;
//   margin: 50px auto;
//   padding: 2rem;
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const SuccessMessage = styled.div`
//   margin-top: 1rem;
//   color: #28a745;
//   font-size: 1rem;
//   text-align: center;
// `;

// const FieldSet = styled.fieldset`
//   border: none;
//   padding: 0;
// `;

// const Legend = styled.legend`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1rem;
// `;

// const Field = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 1rem;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.8rem;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const ToggleButton = styled.button`
//   margin-left: 10px;
//   padding: 0.5rem;
//   background: none;
//   border: none;
//   color: #007bff;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Error = styled.div`
//   color: #dc3545;
//   font-size: 0.9rem;
//   margin-top: 0.5rem;
// `;

// const Buttons = styled.div`
//   text-align: center;
// `;

// const Button = styled.button`
//   padding: 0.8rem 1.5rem;
//   background-color: rgb(0, 0, 0);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: rgb(0, 0, 0);
//   }
// `;

// const API_URL = "http://localhost:3000/Profiles";

// function Form() {
//   const [newProfile, setNewProfile] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message
//   const navigate = useNavigate();

//   const validateProfile = (profile) => {
//     const newErrors = {};
//     if (!profile.name.trim()) newErrors.name = "Name is required.";
//     if (!profile.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())) {
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

//   const sendGreetingEmail = (profile) => {
//     const templateParams = {
//       name: profile.name,
//       email: profile.email,
//     };

//     emailjs
//       .send("service_0vbgauu", "template_ppli7yr", templateParams, "s7V4n4J3dmBJf4V_Y")
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         (error) => {
//           console.error("FAILED...", error);
//         }
//       );
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     if (!validateProfile(newProfile)) return;

//     const isUnique = await checkEmailUnique(newProfile.email);
//     if (!isUnique) return;

//     try {
//       await axios.post(API_URL, newProfile);
//       sendGreetingEmail(newProfile); // Send the greeting email`qq
//       setSuccessMessage("Sign-up successful! Welcome aboard!"); // Set success message
//       localStorage.setItem("username", newProfile.name);
//       setTimeout(() => navigate("/dashboard"), 2000); // Navigate after 2 seconds
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
//           {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//         </FieldSet>
//       </form>
//     </Container>
//   );
// }

// export default Form;


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

const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: #28a745;
  font-size: 1rem;
  text-align: center;
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
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 0, 0);
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
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const validateProfile = (profile) => {
    const newErrors = {};
    if (!profile.name.trim()) newErrors.name = "Name is required.";
    if (!profile.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())) {
      newErrors.email = "Invalid email format.";
    }
    if (!profile.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (
      !/(?=.*[A-Z])/.test(profile.password) || // At least one uppercase letter
      !/(?=.*[a-z])/.test(profile.password) || // At least one lowercase letter
      !/(?=.*[0-9])/.test(profile.password) || // At least one number
      !/(?=.*[!@#$%^&*])/.test(profile.password) || // At least one special character
      profile.password.length < 8 // Minimum length of 8 characters
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.";
    }
    if (profile.password !== profile.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match.";
    }
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
      setSuccessMessage("Sign-up successful! Welcome aboard!"); // Set success message
      localStorage.setItem("username", newProfile.name);
      setTimeout(() => navigate("/dashboard"), 2000); // Navigate after 2 seconds
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
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </FieldSet>
      </form>
    </Container>
  );
}

export default Form;
