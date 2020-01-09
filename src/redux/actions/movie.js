import * as types from '../constants/actionTypes';

export const getMovies = () => {
    return (dispatch) => {
        dispatch({type: types.LOAD_MOVIE_PENDING})
        return fetch('http://www.omdbapi.com/?apikey=b502738f&s=matrix')
                .then(response => response.json())
                .then(json => {
                    dispatch({type: types.LOAD_MOVIE_SUCCES, movies : json.Search.filter(movie => movie.Year > 2002)})
                })
                .catch(err => dispatch({type: types.LOAD_MOVIE_ERROR, error: err}))
    }
}