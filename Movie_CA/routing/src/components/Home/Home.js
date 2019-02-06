import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';

import BackgroundImage from '../elements/BackgroundImage/BackgroundImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import PanelLayout from '../elements/PanelLayout/PanelLayout';
import ImageThumbnail from '../elements/ImageThumbnail/ImageThumbnail';
import LoadMovies from '../elements/LoadMovies/LoadMovies';
import LoadingIcon from '../elements/LoadingIcon/LoadingIcon';

import './Home.css';

class Home extends Component {
    state = {
        movies: [],
        BackgroundImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }
    componentDidMount(){
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }

    searchItems = (searchTerm) => {
        console.log(searchTerm);
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })
        if(searchTerm === ''){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }
        else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });

        if(this.state.searchTerm === ''){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        }
        else{
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            //console.log(result);
            this.setState({
                //copies old movies to add new movies to the end of the array
                movies: [...this.state.movies, ...result.results],
                BackgroundImage: this.state.BackgroundImage || result.results[0],
                loading:false,
                currentPage: result.page,
                totalPages: result.total_pages
            })
        })
    }

    render(){
        return(
            <div className="movie-home">
            {this.state.BackgroundImage ?
                <div>
                    <BackgroundImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.BackgroundImage.backdrop_path}`}
                        title={this.state.BackgroundImage.original_title}
                        text={this.state.BackgroundImage.overview}
                    />
                    <SearchBar callback={this.searchItems}/>
                </div> : null }
                <div className="movie-home-grid">
                    <PanelLayout
                        header={this.state.searchTerm ? 'Search Result': 'Popular Movies'}
                        loading={this.state.loading}
                        >
                        {this.state.movies.map ((element, i) => {
                            return <ImageThumbnail
                                        key={i}
                                        clickable={true}
                                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                        movieId={element.id}
                                        movieName={element.original_title}
                                    />
                        })}
                    </PanelLayout>
                    {this.state.loading ? <LoadingIcon /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                        <LoadMovies text="Load More" onClick={this.loadMoreItems} />
                        : null }
                </div>
            </div>
        )
    }
}

export default Home;
