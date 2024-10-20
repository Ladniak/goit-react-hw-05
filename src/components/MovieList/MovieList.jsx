import { Link } from "react-router-dom"

import module from "./MovieList.module.css"

const MovieList = ({ movies }) => {
    return (
        <ul className={module.moviesList}>
            {Array.isArray(movies) && movies.map((item) => {
                return (<li key={item.id} >
                    <Link className={module.elementLink} to={`/movies/${item.id}`} >{item.title}</Link>
                </li>)
            })}
        </ul>
    )
}

export default MovieList