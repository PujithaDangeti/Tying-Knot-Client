// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_URL = 'https://mocki.io/v1/9000fb5f-563f-4347-b901-fc7f1f483c8b'; // Replace with your mock API URL

// const Messaging = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { profile } = location.state || {}; // Get profile from navigation state
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     if (!profile) {
//       navigate('/'); // Redirect back if no profile is found
//     } else {
//       fetchChat();
//     }
//   }, [profile, navigate]);

//   const fetchChat = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       const chatData = response.data.chat.find(
//         (chat) =>
//           chat.sender === profile.name || chat.receiver === profile.name
//       );
//       setMessages(chatData ? chatData.messages : []);
//     } catch (error) {
//       console.error('Error fetching chat:', error);
//       setMessages([]);
//     }
//   };

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return;

//     const newMsg = {
//       id: messages.length + 1,
//       content: newMessage,
//       sender: 'You', // The current user
//       timestamp: new Date().toISOString(),
//     };

//     setMessages([...messages, newMsg]);
//     setNewMessage('');

//     // Simulate a mirrored reply
//     setTimeout(() => {
//       const reply = {
//         id: messages.length + 2,
//         content: `${newMessage}`, // Mirror user's message
//         sender: profile.name,
//         timestamp: new Date().toISOString(),
//       };

//       setMessages((prevMessages) => [...prevMessages, reply]);
//     }, 1000);
//   };

//   if (!profile) return null;

//   return (
//     <div style={styles.container}>
//       <h2>Chat with {profile.name}</h2>

//       <div style={styles.messageList}>
//         {messages.map((msg, index) => (
//           <div key={index} style={styles.messageItem}>
//             <p>
//               <strong>{msg.sender}:</strong> {msg.content}
//             </p>
//             <small>{new Date(msg.timestamp).toLocaleString()}</small>
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           style={styles.inputBox}
//         />
//         <button onClick={handleSendMessage} style={styles.sendButton}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: { width: '400px', margin: '20px auto', fontFamily: 'Arial' },
//   messageList: { border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' },
//   messageItem: { borderBottom: '1px solid #ddd', padding: '5px 0' },
//   inputContainer: { display: 'flex', marginTop: '10px' },
//   inputBox: { flex: 1, padding: '8px' },
//   sendButton: { padding: '8px 16px', marginLeft: '10px', cursor: 'pointer' },
// };

// export default Messaging;








import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://mocki.io/v1/9000fb5f-563f-4347-b901-fc7f1f483c8b'; // Replace with your mock API URL

const Messaging = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || {}; // Get profile from navigation state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!profile) {
      navigate('/'); // Redirect back if no profile is found
    } else {
      fetchChat();
    }
  }, [profile, navigate]);

  const fetchChat = async () => {
    try {
      const response = await axios.get(API_URL);
      const chatData = response.data.chat.find(
        (chat) =>
          chat.sender === profile.name || chat.receiver === profile.name
      );
      setMessages(chatData ? chatData.messages : []);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages([]);
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      content: newMessage,
      sender: 'You', // The current user
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');

    // Simulate a mirrored reply based on predefined responses
    setTimeout(() => {
      const reply = getReply(newMessage);
      const botMessage = {
        id: messages.length + 2,
        content: reply,
        sender: profile.name,
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  // Predefined responses based on input
  const getReply = (message) => {
    const replies = {
      hii: 'hii',
      'how r u': 'I\'m good, how r u?',
      'let me introduce myself im keer ive jsut went through your profile': 'Ohh!!! Nice to meet you Keer, glad you went through my profile!',
      'So, What you do for living': 'I am civil engineer! currently working in a private sector ! yeahh....',
      'okay': 'What do you do for living?',
      'I am a Software Engineer': 'Ohhh!!! So, life completely filled challenges for you! isnt it?',
      'Yeah life is a bit challenging': 'Yupppp!!!!!',
      'where are you from': 'I am from Bangalore!!',
      'What is your height': 'I am 5.4',
      'what do you like to do in your free time': 'I enjoy reading and learning new things!',
      'do you like music': 'Yes, music is one of my favorite things! I love all genres.',
      'can you help me with coding': 'Of course! What do you need help with?',
      'whats the weather like today': 'It’s sunny and beautiful outside today!',
      'have you been to the beach': 'Yes, I love going to the beach, the sound of the waves is so relaxing.',
      'do you like sports': 'I enjoy watching sports, especially soccer!',
      'what do you do for work': 'I work in the tech industry, how about you?',
      'whats your dream vacation': 'I would love to go to Japan and explore the culture!',
      'do you like animals': 'Yes, I’m a big animal lover. Do you have any pets?',
      'who is favourite indian crickter': 'I’m a not fond of cricket but !!!! I’m a big fan of virat!!!!! !',
      'what is your favourite food': 'Biryaniiiiii! Hyderabad biryani is the best biryani',
      'tell me about your hobbies': 'I like photography and playing chess.',
      'do you like reading': 'Yes, I enjoy reading books, especially fantasy novels!',
      'whats your favorite movie': 'I love sci-fi movies, especially those with a twist ending.',
      'what are your goals for the future': 'I want to keep learning and growing, how about you?',
    };

    return replies[message.toLowerCase()] || "Telidhu, gurtuledu!!!! Marchipoya";
  };

  if (!profile) return null;

  return (
    <div style={styles.container}>
      <h2>Chat with {profile.name}</h2>

      <div style={styles.messageList}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageItem}>
            <p>
              <strong>{msg.sender}:</strong> {msg.content}
            </p>
            <small>{new Date(msg.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={styles.inputBox}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { width: '400px', margin: '20px auto', fontFamily: 'Arial' },
  messageList: { border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' },
  messageItem: { borderBottom: '1px solid #ddd', padding: '5px 0' },
  inputContainer: { display: 'flex', marginTop: '10px' },
  inputBox: { flex: 1, padding: '8px' },
  sendButton: { padding: '8px 16px', marginLeft: '10px', cursor: 'pointer' },
};

export default Messaging;
