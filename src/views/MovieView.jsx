import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from "../components/MoviesList/MoviesList";
import { fetchSearchMovies } from "../services/movieAPI";

const notify = () => toast('Smth went wrong -- try again');

export default function Movie() {
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();
    const location = useLocation();

    const searchURL = new URLSearchParams(location.search).get("query") ?? "";

    useEffect(() => {
        if (!searchQuery) { return }

        fetchSearchMovies(searchQuery)
            .then((data) => {
                if (data.results.length === 0) {
                    notify();
                    return;
                }
                setMovies(data.results);
            })
            .catch((error) => notify())
    }, [searchQuery]);

    useEffect(() => {
        if (searchURL === "") { return }
        setSearchQuery(searchURL)
    }, [searchURL]);

    const setHistory = (searchQuery) => {
        history.push({
            ...location,
            search: `query={searchQuery}`
        })
    };

    const onSubmit = (searchQuery) => {
        setSearchQuery(searchQuery);
        setHistory(searchQuery)
    };

    return (<>
        <Toaster />
        <SearchBar onSubmit={onSubmit} />
        {movies && <MovieList movies={movies} />}
        </>)
}