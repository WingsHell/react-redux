import * as types from '../constants/actionTypes';

export const addMessage = (username,message) => ({
    type: types.ADD_MESSAGE,
    username,
    message
    
})

export const removeMessage = index => ({
    type: types.REMOVE_MESSAGE,
    index
})

export const getMessages = () => {
    return (dispatch) => {
        dispatch({type: types.LOAD_MESSAGE_PENDING})
        return fetch("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
                .then(response => response.json())
                .then(json => {
                    dispatch({type: types.LOAD_MESSAGE_SUCCES, messages: json})
                })
                .catch(err => dispatch({type: types.LOAD_MESSAGE_ERROR, error: err}))
    }
}
