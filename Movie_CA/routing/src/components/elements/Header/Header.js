import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className="movie-header">
            <div className="movie-header-content">
                <img className="movie-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;
