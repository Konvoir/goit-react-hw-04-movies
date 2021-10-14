import { useState } from "react";
// import PropTypes from 'prop-types';
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => setSearchQuery(e.target.value.toLowerCase());
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") {
            alert("Enter search query")
            return;
        }
        onSubmit(searchQuery)
    };
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className={s.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        value={searchQuery}
                        onChange={handleInputChange}>
                    </input>
                </label>
                <button className={s.button} type="submit">
                    Search
                </button>
            </form>
        </header>
    )
}