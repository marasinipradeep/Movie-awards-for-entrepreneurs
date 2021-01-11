import React from 'react'
import { Card, Button } from 'react-bootstrap'

//import from Utils
//import API from "../../Utils/API"
import { useMoviesNominationContext } from "../../Utils/GlobalState";
import { ADD_MOVIES_FOR_NOMINATION, } from "../../Utils/Action";


export default function MoviesList(props) {

    const [state, dispatch] = useMoviesNominationContext();

    function nominateMovie(id) {
        let clickedItem = state.allMovies.find(element => element.imdbID===id)
        dispatch({
            type: ADD_MOVIES_FOR_NOMINATION,
            nominatedMovies: clickedItem
        })
    }

    if (state.allMovies.length === undefined || state.allMovies.length === 0 || state.allMovies.length === null) {
        return (
            <div className="container">
                <h6>Please Enter movie name for nomination</h6>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {state.allMovies.map((allMovies) => (
                    <Card style={{ width: '18rem' }} className="col-md- p-4 m-4" key={allMovies.imdbID}>
                        <Card.Img variant="top" src={allMovies.Poster} />
                        <Card.Body>
                            <Card.Title>Movie Name: {allMovies.Title}</Card.Title>
                            <Card.Text>Year: {allMovies.Year} </Card.Text>
                            <Button variant="primary" onClick={() => nominateMovie(allMovies.imdbID)}>Nominate</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
