import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Route, useParams, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { fetchGetMovieDetails } from "../services/movieAPI";
import s from "./views.module.css";

const Review = lazy(() => import("./ReviewsView"));
const Cast = lazy(() => import("./CastView"));

export default function MovieDetailsView() {
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { url, path } = useRouteMatch();

    useEffect(() => {
        fetchGetMovieDetails(movieId).then((movie) => { setMovie(movie) })
    }, [movieId]);

    const onScrollPage = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.clientHeight,
                behavior: "smooth"
            });
        }, 1000);
    };
    const handleGoBack = () => {
        history.push(location?.state?.from?.location ?? "/")
    };
    return (<>
        {movie && (<>
            <div className={s.container}>
                <button type="button" onClick={handleGoBack} className={s.button}>
                    Go back
                </button>
                <div className={s.card}>
                    <img className={s.poster} alt={movie.title}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <div className={s.info}>
                        <h2 className={s.heading}>{movie.title}</h2>
                        <p>User Score: {movie.vote_average}</p>
                        <h3 className={s.heading}>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3 className={s.heading}>Genres</h3>
                        <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
                    </div>
                </div>
                <div className={s.section}>
                    <h3 className={s.heading}>Information</h3>
                    <ul>
                        <li>
                            <NavLink className={s.link}
                                onClick={() => { onScrollPage() }}
                                to={{
                                    pathname: `${url}/cast`,
                                    state: { from: location?.state?.from ?? "/"}
                                }}>
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={s.link}
                                onClick={() => { onScrollPage() }}
                                to={{
                                    pathname: `${url}/reviews`,
                                    state: { from: location?.state?.from ?? "/"}
                                }}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Suspense fallback={<h2> Loading . . .</h2>}>
                <Route path={`${path}/cast`}>
                    <Cast movieId={movieId} />
                </Route>
                <Route path={`${path}/reviews`}>
                    <Review movieId={movieId} />
                </Route>
            </Suspense>
    </>)}
    </>)
}