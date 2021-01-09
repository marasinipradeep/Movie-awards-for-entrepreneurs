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
            console.log(`inside reducer ${action.workType}`,)
            return {
                ...state,
                allMovies: action.allMovies

            }

        case ADD_MOVIES_FOR_NOMINATION:
            console.log(`inside reducer ${action.nominatedMovies}`,)
            return {
                ...state,
                nominatedMovies: action.nominatedMovies

            }

        case DELETE_MOVIES_FROM_NOMINATION:
            return [...state, {}]

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
