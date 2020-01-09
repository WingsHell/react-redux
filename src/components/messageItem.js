import React from 'react';
import PropTypes from 'prop-types';
import Emoji from "react-emoji-render";

const itemStyle ={
    backgroundColor: '#343a40',
    border: '2px solid white',
    borderRadius: 10,
  }

const MessageItem = (props) => {

    const {username, message} = props.message;

    return (
        <div className="card p-2 m-2" style={itemStyle}>
            <div className="card-body text-white">
                <small>@{username}</small>
                <div>
                    <Emoji text={message}/>
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