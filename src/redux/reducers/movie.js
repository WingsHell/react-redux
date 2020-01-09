import { LOAD_MOVIE_PENDING } from '../constants/actionTypes';
import { LOAD_MOVIE_SUCCES } from '../constants/actionTypes';
import { LOAD_MOVIE_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    movies: [
        /*{username: "Jean", body:"Comment tu vas ?"},
        {username: "Paul", body:"Salut !"},
        {username: "Alfonse", body:"La forme ?"},
        {username: "Foo", body:"C'est la grève !"},*/
    ],
    loading: false,
    error: null
  };

const movie = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_MOVIE_PENDING:
            return {
                ...state,
                loading: true
            };

        case LOAD_MOVIE_SUCCES:
            return {
                movies: action.movies,
                loading: false
            };

        case LOAD_MOVIE_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state
    }
}

export default movie;
