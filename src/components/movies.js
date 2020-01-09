import React, { useEffect } from 'react';
import { getMovies } from './../redux/actions/movie';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies
    };
};

const mapDispatchToProps =  {
    getMovies
}

const Movies = ({ movies, getMovies }) => {

    useEffect( () => {
        getMovies();
    }, [getMovies]);

    return (
        <div>
            <center><h1>Movie List</h1></center>
            {movies.map((movie) => (
                <div className="card" key={movie.Title}>
                    <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
                    <p className="card-text">{movie.Type}</p>
                    </div>
                </div>
                ))}
        </div>   
        )
}

export default connect(mapStateToProps,mapDispatchToProps)(Movies)