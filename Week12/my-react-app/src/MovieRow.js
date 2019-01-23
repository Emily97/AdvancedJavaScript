import React from 'react';

class MovieRow extends React.Component {
  render() {
    return <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" src={this.props.movie.poster_src} />
          </td>
          <td>
            {this.props.movie.original_title}
            <p>{this.props.movie.overview}</p>
            <p>Release Date: {this.props.movie.release_date}</p>
            <p>Rating: {this.props.movie.vote_average}</p>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow;
