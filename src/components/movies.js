import React, { useEffect } from 'react';
import { getMovies } from './../redux/actions/movie';
import { connect } from 'react-redux';
import img from '../img/final-space2.jpg';

const movieStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    backgroundImage:`url(${img})`,
    backgroundSize: "auto",
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    //backgroundColor: "#343a40",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    marginLeft: 100,
    marginRight: 100,
    marginTop:15,
  };

  const cardStyle = {
    borderRadius: 10,
    border: 'none',
    backgroundColor: "white",
    opacity: 0.7,
    fontSize: 16,
    padding: 10,
    flexGrow: 1,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
  };

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
        <div style={movieStyle}>
            <center><h1>Movie List</h1></center>
            {movies.map((movie) => (
                <div className="card" key={movie.Title} style={cardStyle}>
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