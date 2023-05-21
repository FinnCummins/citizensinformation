import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import './MessageInput.css';

type MessageInputProps = {
    onMessageSubmit(message: String): void;
};

const MessageInput = ({ onMessageSubmit }: MessageInputProps) => {
    const inputEl = useRef<HTMLTextAreaElement>(null);

    const onTextSubmit = (event: { preventDefault(): void }) => {
        if (!inputEl || !inputEl.current) return;

        event.preventDefault();
        const inputText = inputEl.current.value;

        onMessageSubmit(inputText);

        // Clear the input field manually since default was prevented.
        if (inputText.length > 0) {
            inputEl.current.value = '';
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onTextSubmit(event);
        }
    };


    return (
        <form className="formContainer" onSubmit={onTextSubmit}>
            <textarea className="textInput" ref={inputEl} onKeyDown={handleKeyDown}></textarea>
            <input className="submitButton" type="submit" value="Submit" />
        </form>
    );
}

export default MessageInput;