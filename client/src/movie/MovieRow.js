import React from 'react';

const MovieRow = ({ title, genere, duration, language }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{genere}</td>
            <td>{duration}</td>
            <td>{language}</td>
        </tr>
    );
};

export default MovieRow;