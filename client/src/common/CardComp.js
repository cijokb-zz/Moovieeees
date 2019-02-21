import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import './Card.scss';
const CardComp = ({ data }) => (
    <CardDeck>
        <Cards data={data} />
    </CardDeck>
)

const Cards = ({ data }) => (
    <>
        {
            data && data.length > 0 ? data.map(function (item, index) {
                return (<Card key={index} style={{ width: '18rem', height: '30rem' }}>
                    <div>
                        <Card.Img variant="top" src={item.Poster} />
                    </div>
                    <Card.Body>
                        <Card.Title>{item.Title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <div>{item.Year}</div>
                        <div>{item.imdbID}</div>
                        <div>{item.Type}</div>
                    </Card.Body>
                </Card>);
            }) : null
        }
    </>

);

export default CardComp;
