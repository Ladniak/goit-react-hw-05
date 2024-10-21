import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

import module from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
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

    const backUrl = location.state?.from || '/movie';
    const goBack = () => navigate(backUrl);

    return (
        <div>
            <button className={module.goBackBtn} onClick={goBack}>Previous Page
                <svg className={module.svgIcon} fill="white" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M317.959,115.859H210.158V58.365h-44.864L0,223.66l165.294,165.294h44.864V331.46h136.548
			c67.367,0,122.174,54.807,122.174,122.174H512V309.9C512,202.905,424.953,115.859,317.959,115.859z M468.88,342.412
			c-30.253-33.206-73.82-54.071-122.174-54.071H167.038v41.378L60.981,223.661l106.057-106.057v41.375h150.921
			c83.219,0,150.921,67.703,150.921,150.921V342.412z"/>
                        </g>
                    </g>
                </svg>
            </button>
            <div className={module.contentDiv}>
                <img alt="Movies's Poster" className={module.movieImg} src={pictureUrl} />
                <div className={module.infoDiv}>
                    <h1>{movie.title}</h1>
                    <p>User Score: {movie.vote_average}</p>

                    <div className={module.mainInformation}>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                    </div>
                    <div className={module.mainInformation}>
                        <h2>Genres</h2>
                        <ul className={module.movieGenres}>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={module.linkDiv}>
                        <h3>Additional Information</h3>
                        <Link className={module.revLink} to={`/movies/${movieId}/cast`} state={{ from: location.state?.from || '/movies' }}>Cast</Link>
                        <Link className={module.revLink} to={`/movies/${movieId}/reviews`} state={{ from: location.state?.from || '/movies' }}>Reviews</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default MovieDetailsPage 