import { FETCH_MOVIES, FILTER_MOVIES } from './MovieActionTypes';
import ApiHelper from '../helpers/apiHelper';


const url = "http://www.omdbapi.com/?apikey=420bb577&s=";
const fetchMovies = (name, dispatch) => {
    let searchUrl = url + name;
    return (dispatch) => {
        ApiHelper.callApi(searchUrl).then((data) => (
            dispatch({ type: FETCH_MOVIES, data: data.Search }))
        ).catch((error) => console.log("error")
        );
    };
};

const filterMovies = (filter) => {
    return {
        type: FILTER_MOVIES, filter: filter
    }
}

export { fetchMovies, filterMovies };