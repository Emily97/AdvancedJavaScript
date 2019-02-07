import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';

//components
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import PanelLayout from '../elements/PanelLayout/PanelLayout';
import Actor from '../elements/Actor/Actor';
import LoadingIcon from '../elements/LoadingIcon/LoadingIcon';
//css
import './Movie.css';

class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        loading:false
    }

    componentDidMount(){
        this.setState({ loading: true});
        //First fetch the movies
        const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }
    //fetch movie results
    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
          //if the status code returned is a failed response see -> https://www.themoviedb.org/documentation/api/status-codes?language=en-US
            if(result.status_code){
                this.setState({ loading: false });
            }
            else{
                this.setState({ movie:result }, () => {
                    // fetch actors in the setState callback function
                    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                    fetch(endpoint)
                    .then(result => result.json())
                    .then(result => {
                        this.setState({
                            actors: result.cast,
                            loading: false
                        })
                    })
                })
            }
        })
        .catch(error => console.error('Error:', error))
    }

    render(){
        return(
            <div className="movie-movie">
                {this.state.movie ?
                    <div>
                        <Navigation movie={this.props.location.movie} />
                        <MovieInfo movie={this.state.movie}
                        />
                    </div>
                : null}
                {this.state.actors ?
                    <div className="movie-movie-grid">
                        <PanelLayout header={'Actors'}>
                            {this.state.actors.map((element, i) => {
                                return <Actor key={i} actor={element} />
                            })}
                        </PanelLayout>
                    </div>
                    : null }
            </div>
        )
    }
}
 export default Movie;
