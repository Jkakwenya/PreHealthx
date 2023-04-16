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
  import SpeechRecognition from './SpeechRecognition'; 
  import {storage, auth} from './firebase'
  import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

  

  const API_KEY = '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'
  
function ChatBot() {

    const user = auth.currentUser;
    
    
    const [typing, setTyping] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messageToRead, setMessageToRead] = useState('');

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
            direction: 'outgoing',
            
        }

        const newMessages = [...messages, newMessage];

        // Update Messages state
        setMessages(newMessages);

        setTyping(true);

        if (message.toLowerCase() === 'hey chat') {
            const initialMessage = {
              message: 'Hello there',
              sender: 'ChatGPT'
            }
            
            setMessages([initialMessage]);
            
            return;
          }
        // process message to chatgpt
        await processMessageToOpenAI(newMessages);
    }

    async function processMessageToOpenAI(chatMessages) {
        
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if(messageObject.sender === 'ChatGPT') {
                role='assistant'
                const chatBotMessage = {
                    message: 'Hello there',
                    sender: 'ChatGPT'
                  };
                  
                  const chatBotEvent = new CustomEvent('chatBotMessage', { detail: chatBotMessage });
                  
                  document.dispatchEvent(chatBotEvent);
                  
            } else {
                role = 'user'
            }

            


            return {role: role, content: messageObject.message}
        });

        

        const systemMessage = {
            role: 'system',
            content: 'Give a summary in simple terms.'
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
            //
        }).then((data) => {
            return data.json();
        }).then((data) => {
            
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
                
            );
            setMessageToRead(data.choices[0].message.content);
            setTyping(false);

            // remove file from storage after message is sent
            chatMessages.forEach((messageObject) => {
              if (messageObject.file) {
                  localStorage.removeItem(messageObject.file);
              }
        });
            
        });
    }


  function speakMessage() {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(messageToRead.replace(/&nbsp;/g, ' '));
    window.speechSynthesis.speak(msg);}

    function handleFileUpload(event) {
      const file = event.target.files[0];
      const storageRef = ref(storage, `users/${user?.uid}/file/${file.name}`);
      
      uploadBytes(storageRef, file)
    .then(async (snapshot) => {
      console.log(`File uploaded successfully.`);
      const fileUrl = await getDownloadURL(snapshot.ref);

      // send the URL to ChatGPT for processing
      handleSend(fileUrl);
      console.log(`File deleted successfully.`);

      // delete the file from Firebase storage
      deleteObject(snapshot.ref)
        .then(() => {
          console.log(`File deleted successfully.`);
        })
        .catch((error) => {
          console.error(`Error deleting file:`, error);
        });
    })
    .catch((error) => {
      console.error(`Error uploading file:`, error);
    });
  }


  return (
    <div className='chat-main-cont'>
        <div className='chat-cont'>
      <MainContainer>
        <ChatContainer>
            <MessageList 
            scrollBehavior='smooth'
            typingIndicator={typing ? <TypingIndicator content='typing' /> : null}>
                {messages.map((message, i) =>{
                    return <Message key={i} model={message} />
                })}
            </MessageList>
            <MessageInput placeholder='Type Message here ' onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
    <div className="chat-message">
    <div className="chat-message-text">
    <p>Check out these resources for more information:</p>
    <ul>
      <li><a href="https://www.webmd.com/">WebMD</a></li>
      <li><a href="https://www.mayoclinic.org/">Mayo Clinic</a></li>
      <li><a href="https://www.cdc.gov/">Centers for Disease Control and Prevention (CDC)</a></li>
    </ul>
    <p>Here are some common medical conditions you might want to learn more about:</p>
    <ul>
      <li>High blood pressure</li>
      <li>Diabetes</li>
      <li>Asthma</li>
      <li>Arthritis</li>
      <li>Depression</li>
    </ul>
  </div>
      <button className='chatbot-btn' onClick={() => setIsSpeaking(!isSpeaking)}>
        {isSpeaking ? 'Stop Speaking' : 'Speak Message'}
      </button>
      
      {isSpeaking && speakMessage()}
      <div className={isSpeaking ? 'chat-message-icon speaking' : 'chat-message-icon'}></div>
      <div>Enter File to Summarize</div>
      <input type="file" onChange={handleFileUpload} />
    </div>
    
    </div>
    
  )
}

export default ChatBot
