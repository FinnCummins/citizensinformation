import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import './MessageInput.css';

type MessageInputProps = {
    onMessageSubmit(message: String): void;
};

const MessageInput = ({ onMessageSubmit }: MessageInputProps) => {
    const inputEl = useRef<HTMLInputElement>(null);

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

    return (
        <form className="formContainer" onSubmit={onTextSubmit}>
            <input className="textInput" ref={inputEl} type="text"></input>
            <input className="submitButton" type="submit" value="Submit" />
        </form>
    );
}

export default MessageInput;