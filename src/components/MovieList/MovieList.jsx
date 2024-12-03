import { Link } from "react-router-dom";

import module from "./MovieList.module.css";

const MovieList = ({ movies, urlState }) => {
    console.log(movies);

    return (
        <ul className={module.moviesList}>
            {Array.isArray(movies) &&
                movies.map((item) => (
                    <li key={item.id}>
                        <div>
                            <Link
                                state={{ from: urlState }}
                                className={module.elementLink}
                                to={`/movies/${item.id}`}
                            >
                                <img
                                    alt={`${item.title}'s Poster`}
                                    className={module.movieImg}
                                    src={item.posterUrl || "https://via.placeholder.com/500x750?text=No+Image"}
                                />
                            </Link>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default MovieList;
