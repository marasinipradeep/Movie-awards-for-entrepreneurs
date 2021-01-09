import React, {useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'

//import from Utils
//import API from "../../Utils/API"
import API from "../../Utils/API";
import { useMoviesNominationContext } from "../../Utils/GlobalState";
import { ADD_MOVIES_FOR_NOMINATION, } from "../../Utils/Action";


export default function MoviesList(props) {

    const [state, dispatch] = useMoviesNominationContext();

    function nominateMovie(nominatedMovie){

        console.log(`nominated movie inside nominateMovie is ${nominatedMovie}`)
        nominatedMovie = state.allMovies.Title
        console.log(`nominated movie inside nominateMovie is ${nominatedMovie}`)

        dispatch({
            type:ADD_MOVIES_FOR_NOMINATION,
            nominatedMovies: nominatedMovie
        })

        console.log(state)

    }

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
                            

                            <Button variant="primary" onClick={()=>nominateMovie("hello")}>Nominate</Button>
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
