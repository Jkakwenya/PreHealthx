/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ChatBot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator
  } from "@chatscope/chat-ui-kit-react";

  const API_KEY = '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'

function ChatBot() {
    const [typing, setTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            message: 'Hello there',
            sender: 'ChatGPT'
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user', 
            direction: 'outgoing'
        }

        const newMessages = [...messages, newMessage];

        // Update Messages state
        setMessages(newMessages);

        setTyping(true);
        // process message to chatgpt
        await processMessageToOpenAI(newMessages);
    }

    async function processMessageToOpenAI(chatMessages) {
        
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if(messageObject.sender === 'ChatGPT') {
                role='assistant'
            } else {
                role = 'user'
            }
            return {role: role, content: messageObject.message}
        });

        const systemMessage = {
            role: 'system',
            content: 'Speak like a poet.'
        }

        const apiRequestBody = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
            );
            setTyping(false);
        });
    }


  return (
    <div className='chat-cont'>
      <MainContainer>
        <ChatContainer>
            <MessageList 
            scrollBehavior='smooth'
            typingIndicator={typing ? <TypingIndicator content='ChatGPT is typing' /> : null}>
                {messages.map((message, i) =>{
                    return <Message key={i} model={message} />
                })}
            </MessageList>
            <MessageInput placeholder='Type Message here ' onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default ChatBot
