import React from 'react';
import MessageItem from './messageItem';
import { useSelector } from "react-redux";

const MessageList = () =>  {

    const messages = useSelector(state => state.chat.messages)      

    return (
    <div className="card p-2 m-2" style={{border:'none',backgroundColor: "#343a40",}}>
        <ul className="pl-0">
        {messages.map((message, i) => (
            <MessageItem message={message} key={i} index={i}/>
            ))}    
        </ul>
    </div>
    )
    
}


export default MessageList