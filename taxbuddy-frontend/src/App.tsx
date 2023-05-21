import React, { useState } from 'react';
import { getResponse } from './chatService';
import MessageInput from './MessageInput';
import Chat from './Chat';
import { MessageProvider } from './MessageContext';
import './App.css';

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onMessageSubmit = (message: string) => {
    const currentTime = new Date();

    console.log(messages);
    const newMessage = {
      author: 'User',
      text: message,
      timeStamp: `${currentTime.getHours()}:${currentTime.getMinutes()}`
    }

    const newReponse = {
      author: 'Tax Buddy',
      text: getResponse(message),
      timeStamp: `${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
    setMessages([...messages, newMessage, newReponse]);
  }

  return (
    <div className="App">
      <MessageProvider value={messages}>
        <div className="chat"><Chat /></div>
      </MessageProvider>
      <div className="messageInput">
        <MessageInput
          onMessageSubmit={onMessageSubmit}
        />
      </div>
    </div>
  );
}

export default App;