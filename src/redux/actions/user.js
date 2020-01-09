import * as types from '../constants/actionTypes';

export const addUser = (username) => ({
    type: types.ADD_USER,
    username,
})
