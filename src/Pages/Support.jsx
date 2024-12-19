import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupportChat = () => {
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState('');

  useEffect(() => {
    fetchChats();
  }, []);

  // Fetch chat history
  const fetchChats = async () => {
    try {
      const response = await axios.get('http://localhost:5174/api/support-chats');
      setChats(response.data);
    } catch (error) {
      console.error('Error fetching support chats:', error);
    }
  };

  // Send a new message to support
  const handleSendChat = async () => {
    if (!newChat.trim()) return;

    try {
      const response = await axios.post('http://localhost:5174/api/support-chats', {
        content: newChat,
        sender: 'User', // Identify the sender as User
        timestamp: new Date(),
      });

      setChats([...chats, response.data]);
      setNewChat('');
    } catch (error) {
      console.error('Error sending chat:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Support Chat</h2>

      {/* Chat history display */}
      <div style={styles.chatList}>
        {chats.map((chat, index) => (
          <div
            key={index}
            style={chat.sender === 'Support' ? styles.supportChatItem : styles.userChatItem}
          >
            <p>
              <strong>{chat.sender}:</strong> {chat.content}
            </p>
            <small>{new Date(chat.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>

      {/* Input for new message */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your query here..."
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
          style={styles.inputBox}
        />
        <button onClick={handleSendChat} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { width: '400px', margin: '20px auto', fontFamily: 'Arial' },
  chatList: { border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' },
  userChatItem: { borderBottom: '1px solid #ddd', padding: '5px 0', backgroundColor: '#f1f1f1' },
  supportChatItem: { borderBottom: '1px solid #ddd', padding: '5px 0', backgroundColor: '#e7f7ff' },
  inputContainer: { display: 'flex', marginTop: '10px' },
  inputBox: { flex: 1, padding: '8px' },
  sendButton: { padding: '8px 16px', marginLeft: '10px', cursor: 'pointer' },
};

export default SupportChat;