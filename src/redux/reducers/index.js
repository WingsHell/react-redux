import { combineReducers } from 'redux';
import chat from './chat';
import movie from './movie';
import userLogged from './userLogged';
import userSaved from './userSaved';

export default combineReducers({
    chat,
    movie,
    userLogged,
    userSaved
  })
  
  