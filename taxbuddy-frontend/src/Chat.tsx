import React, { useContext } from 'react';
import MessageContext from './MessageContext'
import './Chat.css';

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const Chat = () => {

  const messages = useContext(MessageContext)

  const renderMessage = (message: Message, index: number) => (
    <div className="message" key={index.toString()}>
      <div className="messageHeader">
        <p className="author">{message.author}</p>
        <p className="timeStamp">{message.timeStamp}</p>
      </div>
      <p className="messageBody">{message.text}</p>
    </div>
  );

  return (
    <>
      {
        messages.reverse().map((message: Message, index: number) => (
          renderMessage(message, index)
        ))
      }
    </>
  );
}

export default Chat;