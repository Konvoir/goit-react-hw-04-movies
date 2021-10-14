import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={{
                        pathname: `movies/${movie.id}`,
                        state: {
                        from: { location }
                    }}} 
                        className={s.link}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}