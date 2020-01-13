import React, { useEffect } from 'react';
import MessageList from './messageList';
import MessageBar from './messageBar';
import { addMessage } from '../redux/actions/message'
import { connect, useSelector } from'react-redux';
import { getMessages } from './../redux/actions/message';
import { Redirect } from 'react-router-dom';
import img from '../img/fond.jpg';

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    backgroundImage:`url(${img})`,
    backgroundSize: "auto",
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    padding: 10,
    display: "flex",
    flexDirection: "column"
  };

const mapDispatchToProps =  {
    addMessage,
    getMessages
}
    
const Chat = ({addMessage, getMessages}) => {

    const userLogged = useSelector(state => state.userLogged.logged);

    useEffect( () => {
        getMessages();
    }, [getMessages]);

    if(!userLogged) {
        return <Redirect to ="/" />;
    }
    
    return (
        <div className="container p-4">
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

export default connect(null,mapDispatchToProps)(Chat)