import React, { memo } from 'react';
import { END_POINTS } from '../assets/constants';
import StarRating from './StarRating';
import './styles.css';

const Movie = (props) => {
    return (
        <div className="movie_card">
            <img className="card-img-top" src={`${END_POINTS.IMAGE_PRE_URL}${props.movie.poster_path}`} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <p className="text-justify" style={{ fontSize: '14px' }}>
                    {props.movie.overview}
                </p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating rating={props.movie.vote_average} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.vote_average}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(Movie);
