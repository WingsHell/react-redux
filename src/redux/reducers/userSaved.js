import { GET_USER } from '../constants/actionTypes';
import { SAVE_USER } from '../constants/actionTypes';
import { LOAD_USER_PENDING } from '../constants/actionTypes';
import { LOAD_USER_SUCCES } from '../constants/actionTypes';
import { LOAD_USER_ERROR } from '../constants/actionTypes';


const INITIAL_STATE = {
    users: []
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

        case LOAD_USER_PENDING:
            return {
                ...state,
                loading: true
            };
        
        case GET_USER:
            return {
                username: action.user.username,
                message: action.user.messages,
                logged: true,
                creaDate: action.user.creaDate,
            };

        case LOAD_USER_ERROR:
            return {
                ...state,
                error: action.error,
                logged: false
            }
        
        case LOAD_USER_SUCCES:
            return {
                ...state,
            };

        default:
            return state
    }
}

export default userSaved;



