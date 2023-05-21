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
  const [conversation, setConversation] = useState<any>([]);

  const onMessageSubmit = async (message: string) => {
    const newMessage = {
      role: 'user',
      content: message,
    }
    console.log('!!!!!!!!!', conversation);
    const { answer, conversation: conversationResponse } = await getResponse(message, conversation);
    const newReponse = {
      role: 'agent',
      content: answer,
    }

    setMessages([...messages, newMessage, newReponse]);
    setConversation(conversationResponse);
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