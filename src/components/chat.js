import React, { useEffect } from 'react';
import MessageList from './messageList';
import MessageBar from './messageBar';
import { addMessage } from '../redux/actions/message'
import { connect } from'react-redux';
import { getMessages } from './../redux/actions/message';

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    backgroundColor: "#343a40",
    padding: 10,
    display: "flex",
    flexDirection: "column"
  };


const mapStateToProps = (state) => {
    return {
        chat: state.chat,
        user: state.user
    };
};

const mapDispatchToProps =  {
    addMessage,
    getMessages
}
    
const Chat = ({addMessage, getMessages}) => {

    useEffect( () => {
        getMessages();
    }, [getMessages]);

    return (
        <div className="container">
            <div className="card p-3 m-2" style={chatStyle}>
                <div className="card-title">
                    <center><h2 className="text-white">JoliChat</h2></center>
                </div>
                <div className="card-body">
                    <MessageList />
                </div>
                <MessageBar addMessage={addMessage}/>
            </div> 
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)