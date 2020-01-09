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
        <div className="card p-0 m-2" style={itemStyle}>
            <div className="card-body p-2 text-white">
                <div className="row" style={{ display: 'flex', padding: 10 }}>
                    <div className="col-2 pr-4" style={{borderRight:'2px solid white'}}>
                        <small>@{username}</small>
                    </div>
                    <div className="col-10 pl-4">
                        <Emoji text={message}/>
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