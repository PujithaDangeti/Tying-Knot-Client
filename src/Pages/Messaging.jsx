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

    // Simulate a mirrored reply
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        content: `${newMessage}`, // Mirror user's message
        sender: profile.name,
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => [...prevMessages, reply]);
    }, 1000);
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