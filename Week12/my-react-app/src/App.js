import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
// import $ from 'jquery';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: []};
        this.performSearch("a");
}
  performSearch(searchTerm) {
    console.log("Perform search using movie database");

    axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=2e73354b8604079af779d97230848993&query=" + searchTerm)
      .then(response => {
        // this.setState({movies: response.data});
        console.log("Success");
        console.log(response.data);

        var movieRows = [];

        const results = response.data.results;
        results.forEach((movie) =>{
          // console.log(movie.title);
          if(movie.poster_path) {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          } else {
            movie.poster_src = "https://via.placeholder.com/185x278";
          }
          console.log(movie.poster_path);
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows});
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }


  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titlebar">
            <tbody>
                <tr>
                    <td>
                        <img alt="logo" width="50" src="greenlogo.svg" />
                    </td>
                    <td width="8" />
                    <td>
                        <h1>Movies DB Search</h1>
                    </td>
                </tr>
            </tbody>
        </table>

        <input style={{
            fontSize: 24,
            display: 'block',
            paddingTop:8,
            paddingBottom:8,
            paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
