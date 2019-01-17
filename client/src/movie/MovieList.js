import React from 'react';
import MovieRow from './MovieRow';
const MovieDetails = ({ data }) => {
    return (
        <div className="MovieDetails">
            {data ?
                <table style={{ "margin": "auto" }}>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Language</th>
                            <th>Duration</th>
                        </tr>
                        {
                            data.map(function (item) {
                                return (<MovieRow {...item} key={item.id} />)
                            })
                        }
                    </tbody>
                </table> : null
            }
        </div>
    );
};

export default MovieDetails;