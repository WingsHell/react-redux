import { combineReducers } from 'redux';
import chat from './chat';
import movie from './movie';
import user from './user';

export default combineReducers({
    chat,
    movie,
    user
  })
  
  