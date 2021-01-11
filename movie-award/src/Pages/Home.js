import React from 'react';
import Header from '../Components/Header/Header';
import SearchBar from '../Components/SearchBar/SearchBar';
import MoviesList from '../Components/SearchedMoviesList/MoviesList';
import NominatedMovies from '../Components/NominatedMovies/NominatedMovies'

export default function Home() {
    return (
        <div className="container">

            <Header />
            <SearchBar />
            <div className="row">
                <div className="col-md-8">
                    <MoviesList />
                </div>
                <div  className="col-md">
                    <NominatedMovies />
                </div>

            </div>

        </div>
    )
}
