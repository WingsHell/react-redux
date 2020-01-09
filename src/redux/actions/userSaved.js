import * as types from '../constants/actionTypes';

export const addUser = (user) => ({
    type: types.ADD_USER,
    user
})

export const getUser = (username) => ({
    type: types.GET_USER,
    username,
})

export const addUserMessage = (message) => ({
    type: types.ADD_USER_MESSAGE,
    message,
})

export const logoutUser = (username) => ({
    type: types.LOGOUT_USER,
    username,
})

export const saveUser = (user) =>  ({
    type: types.SAVE_USER,
    user,
})
