import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <div className="movie-movieinfo"
            style={{
                background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
            }}>
            <div className="movie-movieinfo-content">
                <div className="movie-movieinfo-thumb">
                    <ImageThumbnail
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
                        clickable={false}
                    />
                </div>
                <div className="movie-movieinfo-text">
                    <h1>{props.movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{props.movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <div className="movie-rating">
                        <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
                        <p className="movie-score">{props.movie.vote_average}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieInfo;
