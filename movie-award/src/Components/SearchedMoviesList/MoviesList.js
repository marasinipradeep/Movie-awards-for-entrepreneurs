import React from 'react'
import { Card, Button } from 'react-bootstrap'

//import from Utils
//import API from "../../Utils/API"
import { useMoviesNominationContext } from "../../Utils/GlobalState";
export default function MoviesList() {

    const [state, dispatch] = useMoviesNominationContext();


    return (
        <>
            {!state.allMovies.length ? (
                <div>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={state.allMovies.Poster} />
                        <Card.Body>
                            <Card.Title>Movies Name: {state.allMovies.Title}</Card.Title>
                            <Card.Text>Actor: {state.allMovies.Actors} </Card.Text>
                            <Card.Text>Awards: {state.allMovies.Awards} </Card.Text>
                            <Card.Text>About: {state.allMovies.Plot} </Card.Text>
                            

                            <Button variant="primary">Nominate</Button>
                        </Card.Body>
                    </Card>
                </div>
            )

                : (
                    <div>
                        <h1>Please Enter movie name for nomination</h1>
                    </div>
                )}
        </>

    );

}
