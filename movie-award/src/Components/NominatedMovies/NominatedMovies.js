import React from 'react';

//import from Utils
//import API from "../../Utils/API"
import { useMoviesNominationContext } from "../../Utils/GlobalState";
import { ADD_MOVIES_FOR_NOMINATION, } from "../../Utils/Action";

import { Card, Button } from 'react-bootstrap'

export default function NominatedMovies() {

    const [state, dispatch] = useMoviesNominationContext();

    function removeNomination(id) {

        console.log(`inside delete button pressed ${id}`)

    }
    return (
        <div className="container">
            <div className="row">
                <h4 > YOUR NOMINATIONS ARE : </h4>
                {state.nominatedMovies.map(nominatedMovies =>

                    <Card style={{ width: '18rem' }} className="col-md- p-4 m-4">

                        <Card.Img variant="top" src={nominatedMovies.Poster} />
                        <Card.Body>
                            <Card.Title>Movie Name: {nominatedMovies.Title}</Card.Title>
                            <Card.Text>Year: {nominatedMovies.Year} </Card.Text>
                            <Button variant="primary" onClick={() => removeNomination("delete")}>Remove</Button>
                        </Card.Body>
                    </Card>
                )}

            </div>
        </div>
    )
}
