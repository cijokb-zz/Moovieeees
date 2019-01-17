import React, { Component } from 'react';

const url = "http://www.omdbapi.com/?apikey=420bb577&s=batman";
// const MovieListContainer = () => (
//     <div>movies</div>
// );

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let me = this;
        fetch(url).then((response) => (response.json())).then((data) => me.setState({ data: data.Search })).catch();
    }
    render() {
        return (
            <div>movies
            {this.state.data ? this.state.data.map(function (item, index) {
                return <li key={index}>{item.Title}</li>
            }) : null}
            </div>
        );
    }
}
export default MovieListContainer;