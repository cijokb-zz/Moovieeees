import React, { Component } from 'react';
import { DropDown } from '../common';
const MovieFilter = ({ filters, title, filterMovies }) => (
    <div className="movie-filter">
        <DropDown filters={filters} title={title} dropDownFilter={filterMovies} />
    </div>
);

export default MovieFilter;
