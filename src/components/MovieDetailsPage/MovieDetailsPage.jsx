import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Route, useParams, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import fetchMovies from "../../services/movieAPI";
import { s } from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovies.fetchMoviesById(movieId).then(response => setMovie(response))
    }, [movieId]);

    const onGoBack = () => { history.push(location?.state?.from ?? '/') };

    return (<>
        {movie && (<>
            <button> type="button" className={s.btn} onClick={onGoBack}>
                Go back
            </button>
            <div className={s.conteiner}>
                <div className={s.img}>
                    <img src={movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : 'not found img--default img'}
                        alt={movie.title}
                    />
                </div>

                <div className={s.description}>
                    <p className={s.title}>{movie.title}</p>
                    <p className={s.text}>{movie.overview}</p>
                </div>
            </div>
            
            <NavLink to={{
                pathname: `${url}/cast`,
                state: { ...location.state }}}
                className={s.link}
                activeClassName={s.activeLink}
            >
                Cast
            </NavLink>

             <NavLink to={{
                pathname: `${url}/reviews`,
                state: { ...location.state }}}
                className={s.link}
                activeClassName={s.activeLink}
            >
                Reviews
            </NavLink>

            <Suspense fallback={<h1>Loading . . . </h1>}>
                <Route path={`${url}/cast`}>
                    <Cast movieId={movieId} />
                </Route>
                <Route path={`${url}/reviews`}>
                    <Reviews movieId={movieId} />
                </Route>
            </Suspense>
        </>)}
    </>)
};

export default MovieDetailsPage;