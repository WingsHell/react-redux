import { ADD_USER } from '../constants/actionTypes';
import { LOGOUT_USER } from '../constants/actionTypes';
import { ADD_USER_MESSAGE } from '../constants/actionTypes';
import { LOAD_USER_SUCCES } from '../constants/actionTypes';
import { LOAD_USER_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    username: '',
    messages: [],
    logged: false,
    creaDate: null,
    error: null
  };

const userLogged = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state, 
                username: action.username,
                logged: true,
                creaDate: new Date().toLocaleString()
            };

        case LOGOUT_USER:
            return {
                username: '',
                messages: [],
                logged: false,
                creaDate: null,
                error: null
            };

        case ADD_USER_MESSAGE:
            return {
                ...state, 
                messages: [
                    ...state.messages,
                    action.message]
            };

        default:
            return state
    }
}

export default userLogged;
