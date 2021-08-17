import axios from 'axios';
import { END_POINTS } from '../assets/constants';
import { STORE_MOVIES, FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from './actionTypes';

export const storeMovies = (payload) => {
    return {
        type: STORE_MOVIES,
        payload,
    };
};

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios
            .get(END_POINTS.MOVIE_DB)
            .then((response) => {
                // response.data is the users
                const users = response.data;
                dispatch(fetchMoviesSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchMoviesFailure(error.message));
            });
    };
};

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    };
};

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies,
    };
};

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    };
};
