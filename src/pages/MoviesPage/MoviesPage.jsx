import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputIsEmpty, setInputIsEmpty] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const searchValue = searchParams.get("q");
    const urlState = `/movies`;

    const onSearch = (value) => {
        setSearchParams({ q: value });
        setInputIsEmpty(false);
        setNoResults(false);
    };

    useEffect(() => {
        if (searchValue === null) return;

        const fetchMovieBySearch = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?&query=${searchValue}&include_adult=false&language=en-US`,
                    options
                );

                if (data.results.length === 0) {
                    setNoResults(true);
                } else {
                    const moviesWithPosters = data.results.map(movie => ({
                        ...movie,
                        posterUrl: movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/500x750?text=No+Image"
                    }));
                    setMovies(moviesWithPosters);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovieBySearch();
    }, [searchValue]);


    return (
        <>
            <SearchBar setInputIsEmpty={setInputIsEmpty} onSearch={onSearch} />
            {inputIsEmpty ? (
                <h1>Fill in the input field!</h1>
            ) : noResults ? (
                <h1>No results found!</h1>
            ) : (
                <MovieList urlState={urlState} movies={movies} />
            )}
        </>
    );
};

export default MoviesPage;
