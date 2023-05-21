import React, { useState } from 'react';
import { getResponse } from './chatService';
import MessageInput from './MessageInput';
import Chat from './Chat';
import { MessageProvider } from './MessageContext';
import './App.css';

type Message = {
  role: string,
  content: string,
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onMessageSubmit = async (message: string) => {
    const currentTime = new Date();

    console.log(messages);
    const newMessage = {
      role: 'user',
      content: message,
      // timeStamp: `${currentTime.getHours()}:${currentTime.getMinutes()}`
    }

    const { conversation, answer } = await getResponse(message);
    
    const newReponse = {
      role: 'agent',
      content: answer,
      // timeStamp: `${currentTime.getHours()}:${currentTime.getMinutes()}`
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