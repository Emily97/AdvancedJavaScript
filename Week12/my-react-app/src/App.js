import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("This is my initializer");


        const movies = [
            {id: 0, title:"Avengers: Infinity War", overview: "everyone dies"},
            {id: 1, title:"Avengers", overview: "new york attack"},
        ]
        this.state = {rows:(
            <p>My row</p>
        )}
        var movieRows =[]
        movies.forEach((movie) => {
            console.log(movie.title)
        })
    }
  render() {
    return (
      <div className="App">
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
            width: '99%',
            paddingTop:8,
            paddingBottom:8,
            paddingLeft: 16
        }} placeholder="Search" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
