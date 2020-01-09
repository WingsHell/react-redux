import React, { useState} from 'react';
//import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/actions/message';
import { addUserMessage } from '../redux/actions/user';
//import { useSelector } from 'react-redux';

const cardStyle = {
    borderRadius: 10,
    border: 'none',
    backgroundColor: "transparent",
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1,
  };

  const inputStyle = {
    borderRadius: 10,
    border: 'none',
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1,
  };

  const SendButton = styled(Button)`
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #336E7B;
    font-weight: bold;
    padding: 10px;
    flex-grow: 1;
    border: 3px solid #343a40;
    background-color: transparent;
    &:hover {
        border: 3px solid white;
        background-color: 3px solid black;
    }
  `;

    const MessageBar = () => {

        const [message, setMessage] = useState("");

        const dispatch = useDispatch();
        const username = useSelector(state => state.user.username);

        const handleChange = (e) => {
            e.preventDefault();
            setMessage(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (message) {
                dispatch(addMessage(username, message));
                dispatch(addUserMessage(message));
                setMessage("");
            }
        }

        return (
            <form>
                <div className="card" style={cardStyle}>
                    <div className="card-footer"style={cardStyle}>
                        <div className="form-group" style={{ display: 'flex', padding: 10 }}>
                            <input type="text" className="form-control" placeholder="Votre message"
                                autoFocus={true} style={inputStyle} value={message.body} onChange={handleChange} name="message" />
                            <br />
                            <span className="float-right" ><SendButton onClick={handleSubmit} type="submit" >envoyer</SendButton></span>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    /*MessageBar.propTypes = {
        handleMessageSubmit: PropTypes.func.isRequired
    };*/


export default MessageBar
