import React from 'react';

const MovieRow = ({ Title, Year, imdbID, Type }) => {
    return (
        <tr>
            <td>{Title}</td>
            <td>{Year}</td>
            <td>{imdbID}</td>
            <td>{Type}</td>
        </tr>
    );
};

export default MovieRow;