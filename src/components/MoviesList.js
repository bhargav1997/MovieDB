import React from 'react';
import Movie from './Movie';

const getMovies = (movies) => {
    return (
        <div className="card-deck">
            {
                movies.map((movie, index) => <Movie key={index} movie={movie} />)
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies)}
    </div>
);

export default MovieList;