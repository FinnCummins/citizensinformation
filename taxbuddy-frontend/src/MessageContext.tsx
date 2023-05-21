import { createContext } from 'react';

const testMessages = [
  { role: "yo", content: "hi there this is a message for the chat"},
];

const MessageContext = createContext(testMessages);

export const MessageProvider = MessageContext.Provider;
export default MessageContext;