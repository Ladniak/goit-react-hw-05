import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <ul>
            {cast.length > 0 ? (
                cast.map(item => (
                    <li key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <h3>Character{item.character}</h3>
                    </li>
                ))
            ) : (
                <p>We don`t have any data about cast.</p>
            )}
        </ul>
    )
}

export default MovieCast