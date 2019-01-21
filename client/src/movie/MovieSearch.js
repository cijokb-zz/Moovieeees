import React, { Component } from 'react';

// const MovieSearch = () => (
//     <div className="movie-search-container">
//         <input type="text" placeholder="enter your movie title here" />
//         <button>search</button>
//     </div>
// );

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        let movieName = e.target.value;
        this.setState({ movieName });
    }

    handleSearch() {
        this.props.searchMovie(this.state.movieName);
    }

    render() {
        return (
            <div className="movie-search-container">
                <input type="text" placeholder="enter your movie title here" onChange={this.handleChange} />
                <button onClick={this.handleSearch}>search</button>
            </div>
        );
    }
}
export default MovieSearch;