import React from 'react';
import { Link } from 'react-router-dom';
import './ImageThumbnail.css';

const ImageThumbnail = (props) => {
    return(
        <div className="movie-ImageThumbnail">
            {props.clickable ?
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
                    <img src={props.image} alt="ImageThumbnail" />
                </Link>
                :
                <img src={props.image} alt="ImageThumbnail" />
            }
        </div>
    )
}

export default ImageThumbnail;
