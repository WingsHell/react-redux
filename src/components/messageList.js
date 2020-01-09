import React from 'react';
import MessageItem from './messageItem';
import { useSelector } from "react-redux";

const MessageList = () =>  {

    const messages = useSelector(state => state.chat.messages)      

    return (
    <div className="card" style={{border:'none',backgroundColor: "transparent"}}>
        <ul className="pl-0">
        {messages.map((message, i) => (
            <MessageItem message={message} key={i} index={i}/>
            ))}    
        </ul>
    </div>
    )
    
}


export default MessageList