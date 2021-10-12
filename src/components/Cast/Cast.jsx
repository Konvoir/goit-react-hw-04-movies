import { useState, useEffect } from "react";
import fetchMovies from "../../services/movieAPI";
import s from "./Cast.module.css";

const Cast = ({ movieId }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovies.fetchMovieCast(movieId).then(({ cast }) => setCast(cast))
    }, [movieId]);

    return (<>
        {cast.length > 0 ? (
            <div className={s.wrapper}>
                <ul className={s.list}>
                    {cast.map(({ id, name, profile_path, character }) => (
                        <li key={id} className={s.list}>
                            <img src={profile_path
                                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                                : 'not found on you reqest'}
                                alt={name}
                            />
                            <p className={s.name}>{name}</p>
                            {character && <p className={s.character}>{character}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        ) : (<p>not found any info</p>)
        }
    </>)
};

export default Cast;