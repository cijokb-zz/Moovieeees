import React from 'react';
import MovieSearch from './MovieSearch';
import MovieList from './MovieList';

const Movie = ({ data }) => (
    <div className=" movie">
        <MovieSearch />
        <MovieList data={data} />
    </div>
);

export default Movie;