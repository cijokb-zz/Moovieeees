import React from 'react';
import Table from 'react-bootstrap/Table';
import MovieRow from './MovieRow';
import { CardComp } from '../common';

const MovieList = ({ data, viewType }) => {
    return (
        <div className="MovieDetails">
            {data && data.length > 0 ?
                viewType === "Table" ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>imdbID</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(function (item, index) {
                                    return (<MovieRow {...item} key={index} />)
                                })
                            }
                        </tbody>
                    </Table> : <CardComp data={data} />
                : null}
        </div>
    )
}

export default MovieList;