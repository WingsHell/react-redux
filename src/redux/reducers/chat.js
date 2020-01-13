import { ADD_MESSAGE } from '../constants/actionTypes';
import { REMOVE_MESSAGE } from '../constants/actionTypes';
import { LOAD_MESSAGE_PENDING } from '../constants/actionTypes';
import { LOAD_MESSAGE_SUCCES } from '../constants/actionTypes';
import { LOAD_MESSAGE_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    messages: [
        /*{username: "Jean", body:"Comment tu vas ?"},
        {username: "Paul", body:"Salut !"},
        {username: "Alfonse", body:"La forme ?"},
        {username: "Foo", body:"C'est la grève !"},*/
    ],
    loading: false,
    error: null
  };

const chat = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state, 
                messages: [
                    ...state.messages,
                    {   username: action.username,
                        message : action.message,
                        sentAt: new Date(action.sentAt ? action.sentAt : new Date())
                    }
                ]  
            };

        case REMOVE_MESSAGE:
            return {
                messages: state.messages.filter((message, i) => i !== action.index)
            };

        case LOAD_MESSAGE_PENDING:
            return {
                ...state,
                loading: true
            };

        case LOAD_MESSAGE_SUCCES:
            return {
                ...state,
                messages: action.messages,
                loading: false
            };

        case LOAD_MESSAGE_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state
    }
}

export default chat;
