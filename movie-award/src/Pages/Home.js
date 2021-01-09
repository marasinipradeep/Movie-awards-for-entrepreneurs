import React from 'react';
import Header from '../Components/Header/Header';
import SearchBar from '../Components/SearchBar/SearchBar';
import MoviesList from '../Components/SearchedMoviesList/MoviesList'

export default function Home() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <MoviesList/>
        </div>
    )
}
