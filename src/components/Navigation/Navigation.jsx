import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => <nav>
    <Link exect to="/" className={styles.link} activeClassName={styles.activeLink}>Главная</Link>
     <Link to="/about" className={styles.link} activeClassName={styles.activeLink}>About</Link>
      <Link to="books" className={styles.link} activeClassName={styles.activeLink}>Книги</Link>
       <Link to="/avtors" className={styles.link} activeClassName={styles.activeLink}>Авторы</Link>
</nav>


export default Navigation; 