// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For API calls

// const Messaging = () => {
//   // State to manage messages and new message input
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   // Fetch messages from the mock API on component load
//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       // Replace local server with the mock API link
//       const response = await axios.get('https://mocki.io/v1/a9fa72fc-b831-4f6c-81bb-5495293050f4');
//       setMessages(response.data); // Assuming the API returns a message list
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return; // Prevent sending empty messages

//     try {
//       // Create a new message locally (since mock APIs do not accept POST requests)
//       const newMsg = {
//         id: messages.length + 1,
//         content: newMessage,
//         sender: 'You', // Static sender name
//         timestamp: new Date().toISOString(),
//       };

//       // Update state to include the new message
//       setMessages([...messages, newMsg]);
//       setNewMessage(''); // Clear input field
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Messaging</h2>

//       {/* Message Display Section */}
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

//       {/* Message Input Section */}
//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           placeholder="Type your message here..."
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
import axios from 'axios'; // For API calls

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://mocki.io/v1/a9fa72fc-b831-4f6c-81bb-5495293050f4');
      const messagesData = Array.isArray(response.data) ? response.data : [];
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]); // Reset to empty array on error
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const newMsg = {
        id: messages.length + 1,
        content: newMessage,
        sender: 'You',
        timestamp: new Date().toISOString(),
      };

      setMessages([...messages, newMsg]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Messaging</h2>

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
          placeholder="Type your message here..."
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
