import { ADD_USER } from '../constants/actionTypes';
import { LOAD_USER_SUCCES } from '../constants/actionTypes';
import { LOAD_USER_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    username: '',
    messages: [],
    logged: false,
    error: null
  };

const user = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state, 
                username: action.username,
                logged: true
            };

        case LOAD_USER_SUCCES:
            return {
                ...state,
            };

        case LOAD_USER_ERROR:
            return {
                ...state,
                error: action.error,
                logged: false
            }

        default:
            return state
    }
}

export default user;
