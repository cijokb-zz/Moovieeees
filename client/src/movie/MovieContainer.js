import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './MovieActions';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';



class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
    }
    searchMovie(name) {
        this.props.fetchMovies(name);
    }
    render() {
        if (!this.props.authenticated) {
            return <Redirect to="/login" />
        }
        return (<div>
            <MovieSearch searchMovie={this.searchMovie} />
            {this.props.data ? <MovieList data={this.props.data} /> : null}
        </div>
        );
    }
}

function mapStateToProps({ user, movies }) {
    return {
        data: movies,
        authenticated: user.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: bindActionCreators(fetchMovies, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);