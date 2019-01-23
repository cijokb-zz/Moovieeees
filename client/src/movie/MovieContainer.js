import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, filterMovies } from './MovieActions';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';
import MovieFilter from './MovieFilter';
import { LineChart } from '../common';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
    }
    searchMovie(name) {
        this.props.fetchMovies(name);
    }
    filterMovies(filter) {
        this.props.filterMovies(filter);
    }
    render() {
        if (!this.props.authenticated) {
            return <Redirect to="/login" />
        }
        return (<div>
            <MovieSearch searchMovie={this.searchMovie} />
            {this.props.data ? <div>
                <MovieFilter data={[{ "type": "movie" }, { "type": "year" }]} title="Filter Movies" filterMovies={this.filterMovies} />
                <MovieList data={this.props.data} />
            </div> : null}
            <LineChart />
        </div>
        );
    }
}

// function getfilteredMovies(movies, filter) {
//     switch (filter) {
//         case "movie":
//             return movies.filter(function (movie) {
//                 return movie.Type === "movie";
//             });
//         case "series":
//             return movies.filter(function (movie) {
//                 return movie.Type === "series";
//             });
//         case "SHOW_ALL":
//         default:
//             return movies
//     }
// }

function mapStateToProps({ user, movies }) {
    return {
        data: movies,
        authenticated: user.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: bindActionCreators(fetchMovies, dispatch),
        filterMovies: bindActionCreators(filterMovies, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);