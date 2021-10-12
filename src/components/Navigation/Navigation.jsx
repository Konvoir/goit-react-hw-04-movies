import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () =>
    <nav className={s.nav}>
        <NavLink exect to="/" className={s.link} activeClassName={s.activeLink}>Home</NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>Movie</NavLink>
    </nav>
    
export default Navigation; 