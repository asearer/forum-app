import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, id: messages.length }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat with us</div>
      <div className="chat-body">
        {messages.map((message) => (
          <div key={message.id} className="message">{message.text}</div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWidget;


