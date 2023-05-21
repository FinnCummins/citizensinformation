import { createContext } from 'react';

const testMessages = [
  { author: "yo", text: "hi there this is a message for the chat", timeStamp: '17.07'},
];

const MessageContext = createContext(testMessages);

export const MessageProvider = MessageContext.Provider;
export default MessageContext;