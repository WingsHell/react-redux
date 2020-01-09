import React, { useState} from 'react';
//import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/actions/message';
//import { useSelector } from 'react-redux';

const cardStyle = {
    borderRadius: 10,
    border: 'none',
    backgroundColor: "#343a40",
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
        //const loading = useSelector(state => state.chat.messages.loading);

        const handleChange = (e) => {
            e.preventDefault();
            setMessage(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (message) {
                const username = "Toms"
                dispatch(addMessage(username, message));
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
