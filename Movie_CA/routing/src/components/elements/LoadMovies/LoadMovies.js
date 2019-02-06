import React from 'react';
import './LoadMovies.css';

const LoadMovies = (props) => {
    return(
        <div className="movie-LoadMovies" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default LoadMovies;
