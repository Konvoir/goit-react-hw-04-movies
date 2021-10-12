import { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import  fetchMovies  from "../../services/movieAPI";

const MoviesPage = () => {
    const location = useLocation();
    const history = useHistory();
    const { search, pathname } = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [movie, setMovie] = useState([]);

    const queryValue = new URLSearchParams(search).get('query');

    useEffect(() => {
        if (!search) { return }
        if (!queryValue) { return }
        fetchMovies
            .fetchSearchMovie(queryValue)
            .then(results => setMovie(results))
            .finally(setSearchQuery(''));
        
        history.push({ search: `query=${queryValue}` });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryValue]);

    const handleQueryChange = event => setSearchQuery(event.targer.value);
    const handleFormSubmit = event => {
        event.preventDefault();
        history.push({ ...location, search: `query=${searchQuery}` })
    };

    return (<>
        <form onSubmit={handleFormSubmit}>
            <input type="text"
                autoComplete="on"
                autoFocus
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleQueryChange}
            />
            <button type="submit">
                <span>Search</span>
            </button>
        </form>

        <ul>
            {movie.map(({ id, title }) => (
                <li key={id}>
                    <NavLink to={{
                        pathname: `${pathname}/${id}`,
                        state: { from: location }
                    }}
                    >
                        {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </>)
};

export default MoviesPage;