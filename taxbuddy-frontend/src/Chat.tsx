import { useContext } from 'react';
import MessageContext from './MessageContext'
import './Chat.css';

type Message = {
  role: string,
  content: string,
};

type ChatProps = {
  isLoading: boolean,
};

const Chat = (props: ChatProps) => {
  const { isLoading } = props;
  const messages = useContext(MessageContext);

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
        messages.map((message: Message, index: number) => (
          renderMessage(message, index)
        ))
      }
      {isLoading ? <p className="loading">Thinking...</p> : null}
    </>
  );
}

export default Chat;