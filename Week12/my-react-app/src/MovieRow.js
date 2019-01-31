import React from 'react';
import './App.css';


class MovieRow extends React.Component {
  render() {
    return <table key={this.props.movie.id} className = "card">
      <tbody className = "card-content">
        <tr>
          <td>
            <img className="posterImg" alt="poster" src={this.props.movie.poster_src} />
            <div className="media-content">
              <h4>{this.props.movie.original_title}</h4>
              <p>Release Date: {this.props.movie.release_date}</p>
              <p>Rating: {this.props.movie.vote_average}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow;
