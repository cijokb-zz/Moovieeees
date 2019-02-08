
import * as types from './MovieActionTypes';
import initialState from '../initialState';

function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.FETCH_MOVIES:
            let filterSet = getFilterSet(action.data);
            return Object.assign({}, state, { all: [...action.data], filterSet: [...filterSet], filter: '' });
        case types.FILTER_MOVIES:
            //let filteredMovies = getfilteredMovies(state.all, action.filter);
            //console.log(filteredMovies);
            //return Object.assign({}, state, { filteredMovies: [...filteredMovies] });
            return Object.assign({}, state, { filter: action.filter });
        default:
            return state;
    }
}

function getFilterSet(data) {
    let filterSet = [{ "type": "all" }];
    data.map(function (item) {
        if (item.Type) {
            if (filterSet.length > 0) {
                let c = 0;
                filterSet.forEach(function (filter) {
                    if (filter.type === item.Type) {
                        c++;
                    }
                });
                if (c === 0) {
                    filterSet.push({ "type": item.Type });
                }
            }
            else {
                filterSet.push({ "type": item.Type });
            }
        }
    });

    return filterSet;
}
// function movieFilterReducer(state = initialState.filteredMovies, action) {
//     switch (action.type) {
//         // case types.FILTER_MOVIES:
//         //     let filteredMovies = getfilteredMovies(, action.filter);
//         //     console.log(filteredMovies);
//         //     return [...filteredMovies];
//         default:
//             return state;
//     }
// }

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
//             return movies;
//     }
// }
export { movieReducer };