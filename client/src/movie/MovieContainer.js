import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Movie from './Movie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './MovieActions';




class MovieContainer extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }
    render() {
        if (!this.props.authenticated) {
            return <Redirect to="/login" />
        }
        return (<div>
            {this.props.data ? <Movie data={this.props.data} /> : null}
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