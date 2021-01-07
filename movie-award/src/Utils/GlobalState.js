import React, { createContext, useReducer, useContext } from "react";

import {
    ADD_MOVIES_FOR_NOMINATION,
    DELETE_MOVIES_FROM_NOMINATION
 }
     from './Action'

const MoviesNominationContext = createContext({});
const { Provider } = MoviesNominationContext;

function reducer(state, action) {
    switch (action.type) {
        case ADD_MOVIES_FOR_NOMINATION:
            return [
                ...state,
                {
                    id: state.length * Math.random(),
                    name: action.name
                }
            ];
        case DELETE_MOVIES_FROM_NOMINATION:
            return state.filter((_, index) => {
                return index !== action.index;
            });
        
        default:
            return state;
    }
}

function MoviesNominationProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, {
        allMovies:[],
        nominatedMovies:[]
    });

    return <Provider value={[state, dispatch]} {...props} />;
}

function useMoviesNominationContext() {
    return useContext(MoviesNominationContext);
}

export { MoviesNominationProvider, useMoviesNominationContext };
