import module from "./MovieList.module.css"

const MovieList = ({ movies }) => {
    return (
        <ul className={module.moviesList}>
            {Array.isArray(movies) && movies.map((item) => {
                return (<li key={item.id} >
                    <a className={module.elementLink} href={{}} >{item.title}</a>
                </li>)
            })}
        </ul>
    )
}

export default MovieList