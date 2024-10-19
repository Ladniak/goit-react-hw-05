import axios from "axios"
import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList"

const HomePage = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options);

                setMovies(data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrendingMovie();
    }, [])

    return (
        <>
            <div>Trending movies</div>
            <MovieList movies={movies} />
        </>
    )
}

export default HomePage