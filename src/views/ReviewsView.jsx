import { useState, useEffect } from "react";
import { fetchGetMovieReviews } from "../services/movieAPI";

export default function ReviewsView({ movieId }) {
    const [reviewsList, setReviewsList] = useState([]);
    useEffect(() => {
        fetchGetMovieReviews(movieId).then((data) => {
            setReviewsList(data.results)
        })
    }, [movieId])
    return (<>
        {reviewsList.length > 0 ? (
            <>
                <ul>
                    {reviewsList.map((review) => (
                        <li key={review.id}>
                            <h3> { review.author}</h3>
                            <p> {review.content} </p>
                        </li>
                    ))}
                </ul>
            </>
        ) : ( <p> No results </p>)
    }
    </>)
}