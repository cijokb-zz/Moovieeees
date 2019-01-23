import React from 'react';
import { DropDown } from '../common';
const MovieFilter = ({ data, title, filterMovies }) => (
    <div className="movie-filter">
        <DropDown data={data} title={title} dropDownFilter={filterMovies} />
    </div>
);

export default MovieFilter;