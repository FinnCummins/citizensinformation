import React, { useContext } from 'react';
import MessageContext from './MessageContext'
import './Chat.css';

type Message = {
  role: string,
  content: string,
};

const Chat = () => {

  const messages = useContext(MessageContext)

  const renderMessage = (message: Message, index: number) => (
    <div className="message" key={index.toString()}>
      <div className="messageHeader">
        <p className="author">{message.role}</p>
        {/* <p className="timeStamp">{message.timeStamp}</p> */}
      </div>
      <p className="messageBody">{message.content}</p>
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