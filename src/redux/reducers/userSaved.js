import { LOAD_USER } from '../constants/actionTypes';
import { SAVE_USER } from '../constants/actionTypes';
import { LOAD_USERS_PENDING } from '../constants/actionTypes';
import { LOAD_USERS_SUCCES } from '../constants/actionTypes';
import { LOAD_USERS_ERROR } from '../constants/actionTypes';


const INITIAL_STATE = {
    users: [],
    loading: false,
    error: null
};

const userSaved = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        username: action.user.username,
                        messages: action.user.messages,
                        saveDate: new Date().toLocaleString()
                    }
                ]
            }

        case LOAD_USERS_PENDING:
            return {
                ...state,
                loading: true
            };
        
        case LOAD_USER:
            return {
                users: state.users.filter((username) => username !== action.username),
                loading: false
            };

        case LOAD_USERS_ERROR:
            return {
                ...state,
                error: action.error,
                logged: false
            }
        
        case LOAD_USERS_SUCCES:
            return {
                ...state,
            };

        default:
            return state
    }
}

export default userSaved;



