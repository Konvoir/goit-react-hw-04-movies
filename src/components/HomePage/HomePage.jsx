import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import  fetchMovie  from '../../services/movieAPI.js';
import s from './HomePage.module.css';

export const HomePage = () => {
    const location = useLocation();
    const [trendMovie, setTrendMovie] = useState([]);

    useEffect(() => {
        fetchMovie
            .fetchTrendingMovieByDay()
            .then(results => setTrendMovie(results))
    }, []);

    return (
        <ul className={s.list}>
            {trendMovie.map(({ id, title }) => (
                <li key={id} className={s.item}>
                    <NavLink to={{
                        pathname: `movies/${id}`,
                        state: { from: location },
                    }}>
                        {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
};