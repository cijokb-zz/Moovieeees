
import * as types from './MovieActionTypes';
import initialState from '../initialState';
function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.FETCH_MOVIES:
            return [...action.data];
        case types.FILTER_MOVIES:
            let filteredMovies = getfilteredMovies(state, action.filter);
            console.log(filteredMovies);
            return [...filteredMovies];
        default:
            return state;
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
        case "SHOW_ALL":
        default:
            return movies
    }
}
export default movieReducer;