import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = (props) => {
    return(
        <div className="movie-BackgroundImage"
            style={{
                background:
                    `url('${props.image}'), #1c1c1c`
            }}
        >
            <div className="movie-BackgroundImage-content">
                <div className="movie-BackgroundImage-text">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default BackgroundImage;
