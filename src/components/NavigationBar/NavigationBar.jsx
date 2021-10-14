import { NavLink } from "react-router-dom";
import s from "./NavigationBar.module.css";

const NavigationBar = () => (
    <header className={s.header}>
        <nav>
            <NavLink to="/" exact
                className={s.link}
                activeClassName={s.activeLink}>
                Home
            </NavLink>

            <NavLink to="/movies"
                className={s.link}
                activeClassName={s.activeLink}>
                Movies
            </NavLink>
        </nav>
    </header>
);

export default NavigationBar;