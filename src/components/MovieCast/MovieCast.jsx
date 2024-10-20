import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import module from "./MovieCast.module.css"

const MovieCast = () => {

    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&page=1`, options);

                setCast(data.cast);
                console.log(data.cast);

            } catch (error) {
                console.log(error);
            }
        }
        fetchTrendingMovie();

    }, [movieId]);

    if (!cast) return;

    return (
        <ul className={module.castList}>
            {cast.length > 0 ? (
                cast.map(item => (
                    <li className={module.castListItem} key={item.id}>
                        <img className={module.castImg} alt="Avatar" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} />
                        <div className={module.infoOfActor}>
                            <h3 className={module.nameOfActor}>Name: {item.name}</h3>
                            <h3>Character: {item.character}</h3>
                        </div>

                    </li>
                ))
            ) : (
                <p>We don`t have any data about cast.</p>
            )}
        </ul>
    )
}

export default MovieCast