import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import module from "./MovieReviews.module.css"

const MovieReviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchTrendingMovie = async () => {
            try {
                const options = {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M2MzZkNDUzNTA1MTFiYjVlMmFkNzNkYzdjZDBiZiIsIm5iZiI6MTcyOTM1NDgyMC4yMDg5MjcsInN1YiI6IjY3MTNiNTliMGNiNjI1MmY5OTA4NTJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjLTxRTJ9nts9n0jEU4iFaZ2OeUme3YkG94OD59MlOY'
                    }
                };

                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options);

                setReviews(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrendingMovie();

    }, [movieId]);

    if (!reviews) return;

    return (
        <ul className={module.reviewList}>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <li className={module.reviewListItem} key={review.id}>
                        <h3>{review.author}</h3>
                        <p className={module.reviewContent}>{review.content}</p>
                    </li>
                ))
            ) : (
                <p>We don`t have any reviews for this movie.</p>
            )}
        </ul>
    )
}

export default MovieReviews