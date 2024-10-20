import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

import module from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [picture, setPicture] = useState(null);
    const [pictureUrl, setPictureUrl] = useState(null);

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);

                setPicture(data.poster_path);
                setMovie(data);
                setPictureUrl(`https://image.tmdb.org/t/p/w500${picture}`)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrendingMovie();
    }, [movieId, picture]);

    if (!movie) return;

    return (
        <div>
            <img src={pictureUrl} />
            <div>
                <h1>{movie.title}</h1>
                <p>User Score: {movie.vote_average}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <ul>
                    {movie.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <Link className={module.revLink} to={`/movies/${movieId}/cast`} >Cast</Link>
            <Link className={module.revLink} to={`/movies/${movieId}/reviews`} >Reviews</Link>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage 