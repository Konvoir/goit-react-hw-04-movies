import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/movieAPI";
import MovieList from "../components/MoviesList/MoviesList";

export default function HomeView() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchTrendingMovies().then((data) => {
            setMovies(data.results)
        })
    }, []);

    return (<>
        <h2> Trending Today</h2>
        {movies && <MovieList movies={movies} />}
    </>)
}