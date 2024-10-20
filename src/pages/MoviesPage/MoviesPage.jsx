import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar"
import MovieList from "../../components/MovieList/MovieList";

import axios from "axios";

const MoviesPage = () => {

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchValue = searchParams.get("q");

    const onSearch = (value) => {
        setSearchParams({ q: value })
    }

    useEffect(() => {
        if (searchValue === null) return;

        const fetchMovieBySearch = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?&query=${searchValue}&include_adult=false&language=en-US`, options);

                setMovies(data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovieBySearch();
    }, [searchValue]);

    return (
        <>
            <SearchBar onSearch={onSearch} />
            <MovieList movies={movies} />
        </>
    )
}

export default MoviesPage