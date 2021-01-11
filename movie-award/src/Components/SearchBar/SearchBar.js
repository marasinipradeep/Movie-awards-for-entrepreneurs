import React from 'react'

//import from Utils
//import API from "../../Utils/API"
import API from "../../Utils/API"
import { useMoviesNominationContext } from "../../Utils/GlobalState";
import { SEARCH_MOVIES_FOR_NOMINATION, } from "../../Utils/Action"

export default function SearchBar() {

    const [state, dispatch] = useMoviesNominationContext();

    function searchByMovieName(e) {
        API.getAllEmployee(e.target.value).then((retrievedMovies) => {
            console.log(`Searchbar data from API`)
            console.log(retrievedMovies.data.Search)
            dispatch({
                type: SEARCH_MOVIES_FOR_NOMINATION,
                allMovies: retrievedMovies.data.Search
            })
        })
    }


    return (
        <div className="container">
            <form className="row filter-form">
                <div className="form-group m-4">
                    <h3 >Search Movie</h3><br />
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
