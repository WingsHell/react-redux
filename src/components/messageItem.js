import React from 'react';
import PropTypes from 'prop-types';
import Emoji from "react-emoji-render";
import Moment from 'react-moment';

const itemStyle ={
    backgroundColor: '#343a40',
    border: '2px solid white',
    borderRadius: 10,
  }

const MessageItem = (props) => {

    const {username, message, sentAt} = props.message;

    return (
        <div className="card p-0 m-2" style={itemStyle}>
            <div className="card-body p-2 text-white">
                <div className="row" style={{ display: 'flex', padding: 10 }}>
                    <div className="col-2 pr-4" style={{borderRight:'2px solid white', textAlign:"center", alignContent:"center", display:"inline-grid"}}>
                        <small>@{username}</small>
                    </div>
                    <div className="col-10 pl-4">
                        <Emoji text={message}/>
                        <div className="row" style={{ display: 'flex', padding:0, margin:0 }}>
                    <div className="col-7 pr-4">
                        
                    </div>
                    <div className="col-5 pl-4" style={{textAlign:"end"}}>
                        <small>send at : <Moment format="DD/MM/YYYY HH:mm:ss">{sentAt}</Moment></small>
                    </div>
                </div>
                    </div>
                </div>
                
                
            </div>
        </div>   
    )
}

MessageItem.propTypes = {
    message: PropTypes.shape({
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    })
};

export default MessageItem