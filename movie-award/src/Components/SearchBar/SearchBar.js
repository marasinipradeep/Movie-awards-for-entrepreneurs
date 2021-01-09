import React, { useEffect } from 'react'

//import from Utils
//import API from "../../Utils/API"
import API from "../../Utils/API"
import { useMoviesNominationContext } from "../../Utils/GlobalState";
import { SEARCH_MOVIES_FOR_NOMINATION, } from "../../Utils/Action"

export default function SearchBar() {

    const [state, dispatch] = useMoviesNominationContext();

    function searchByMovieName(e) {
        console.log(e.target.value)
        API.getAllEmployee(e.target.value).then((movies) => {
            console.log(`All listed movies are ${movies}`)
            console.log(movies)
            dispatch({
                type: SEARCH_MOVIES_FOR_NOMINATION,
                allMovies: movies.data
            })
        })

        console.log("state inside search bar after dispatch")
        console.log(state)

    }


    return (


        <div>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Search Movie</label>
                    <input
                        name="movie"
                        id="movie"
                        onChange={searchByMovieName}
                    >

                    </input>
                </div>

            </form>

        </div>
    )
}
