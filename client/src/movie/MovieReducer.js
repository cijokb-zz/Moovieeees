
import * as types from './MovieActionTypes';
import initialState from '../initialState';
function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.FETCH_MOVIES:
            return [...action.data];
        default:
            return state;
    }
}
export default movieReducer;