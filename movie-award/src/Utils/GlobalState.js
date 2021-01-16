import React, { createContext, useReducer, useContext } from "react";

import {
    SEARCH_MOVIES_FOR_NOMINATION,
    ADD_MOVIES_FOR_NOMINATION,
    DELETE_MOVIES_FROM_NOMINATION
}
    from './Action'

const MoviesNominationContext = createContext({});
const { Provider } = MoviesNominationContext;

function reducer(state, action) {
    switch (action.type) {
        case SEARCH_MOVIES_FOR_NOMINATION:
            console.log(`inside reducer SEARCH_MOVIES_FOR_NOMINATION`)
            console.log(action.allMovies)
            return {
                ...state,
                allMovies: action.allMovies
            }

        case ADD_MOVIES_FOR_NOMINATION:
            console.log(`inside reducer ADD_MOVIES_FOR_NOMINATION`)
           // console.log(action.nominatedMovies)
            console.log(state.nominatedMovies)

            if(state.nominatedMovies.length ===5){
                return{
                    ...state,
                    nominatedMovies:[...state.nominatedMovies]
                }
            }

            const checkAlreadyNominatedMovies = state.nominatedMovies.includes(action.nominatedMovies)
            console.log(checkAlreadyNominatedMovies)

            if(checkAlreadyNominatedMovies){
                return{
                    ...state,
                    nominatedMovies:[...state.nominatedMovies]
                }
            }
            
            return {
                ...state,
                nominatedMovies: [action.nominatedMovies, ...state.nominatedMovies]
            }

        case DELETE_MOVIES_FROM_NOMINATION:
            const removeNominatedMovie = state.nominatedMovies.filter(removeNominatedMovie => {
                console.log(`inside delete nominated movies`)
                console.log(removeNominatedMovie.imdbID)
                console.log(action.removeNominatedMovies)
                return removeNominatedMovie.imdbID !== action.removeNominatedMovies
            })

            return {
                ...state,
                nominatedMovies: removeNominatedMovie
            }

        default:
            return state;
    }
}

function MoviesNominationProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, {
        allMovies: [],
        nominatedMovies: []
    });

    return <Provider value={[state, dispatch]} {...props} />;
}

function useMoviesNominationContext() {
    return useContext(MoviesNominationContext);
}

export { MoviesNominationProvider, useMoviesNominationContext };
