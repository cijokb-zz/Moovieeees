import React from 'react';
import Table from 'react-bootstrap/Table';
import MovieRow from './MovieRow';
// const MovieList = ({ data }) => {
//     return (
//         <div className="MovieDetails">
//             {data && data.length ?
//                 <table style={{ "margin": "auto" }}>
//                     <tbody>
//                         <tr>
//                             <th>Title</th>
//                             <th>Year</th>
//                             <th>imdbID</th>
//                             <th>Type</th>
//                         </tr>
//                         {
//                             data.map(function (item, index) {
//                                 return (<MovieRow {...item} key={index} />)
//                             })
//                         }
//                     </tbody>
//                 </table> : null
//             }
//         </div>
//     );
// };

const MovieList = ({ data }) => {
    return (
        <div className="MovieDetails">
            {data && data.length ?
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
                </Table> : null}
        </div>
    )
}

export default MovieList;