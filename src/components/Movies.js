import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../store/actions';
import MovieList from './MoviesList';

const Movies = (props) => {
    const { moviesData, fetchMovies } = props;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        console.log(moviesData);
        fetchMoviesData();
    }, [moviesData]);

    const fetchMoviesData = () => {
        if (moviesData && moviesData.movies && moviesData.movies.results) {
            setMovies(moviesData.movies.results);
        }
    };

    return moviesData.loading ? (
        <h2>Loading...</h2>
    ) : moviesData.error ? (
        <h2>{moviesData.error}</h2>
    ) : movies.length > 0 ? (
        <div className="container-fluid" style={{ marginLeft: '-15px' }}>
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    ) : (
        'No Movies Available !!'
    );
};

const mapStateToProps = (state) => {
    return {
        moviesData: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
