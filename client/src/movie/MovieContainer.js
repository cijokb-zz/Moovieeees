
import React, { Component, Suspense } from 'react';
//import { ResizableBox } from 'react-resizable';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, filterMovies } from './MovieActions';
//import MovieList from './MovieList';
import MovieSearch from './MovieSearch';
import MovieFilter from './MovieFilter';
import { InfiniteScroller, AreaChart } from '../common';
import Resizable from '../common/Resizable';
import './movie.scss';

import chartData from './data';
const MovieList = React.lazy(() => import('./MovieList'));
const LineChart = React.lazy(() => import('./../common/LineChart'));

const data =
    [
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540],
    ];
class MovieContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
        //this.onResize = this.onResize.bind(this);
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
        return (< div className="movie-container">
            <MovieSearch searchMovie={this.searchMovie} />
            <Suspense fallback={<div>Loading....</div>}>
                {this.props.movies && this.props.movies.length > 0 ? <div>
                    {this.props.filterSet.length > 1 ? <MovieFilter filters={this.props.filterSet} title="Filter Movies" filterMovies={this.filterMovies} /> : null}
                    <MovieList data={this.props.movies} viewType="Card" />
                    {/*
                    <Resizable width={1000} height={300}>
                        <AreaChart data={data} />
                    </Resizable
                    */
                    }
                </div> : null}
            </Suspense>

        </div>
        );
    }
}

function getfilteredMovies(movies, filter) {
    switch (filter) {
        case "movie":
            return movies.filter(function (movie) {
                return movie.Type === "movie";
            });
        case "series":
            return movies.filter(function (movie) {
                return movie.Type === "series";
            });
        case "all":
        case "":
        default:
            return movies
    }
}

function mapStateToProps({ user, movies }) {
    return {
        movies: getfilteredMovies(movies.all, movies.filter),
        filterSet: movies.filterSet,
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