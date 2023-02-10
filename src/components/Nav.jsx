import { NavLink } from 'react-router-dom';
import UserSettings from './UserSettings';
import styles from './Nav.module.css';

export default function Nav() {
  function resetScroll() {
    window.scrollTo(0, 0);
  }

  let activeStyle = {
    textShadow: "0 6px 5px var(--secondary-bg-colour)",
    transform: "scaleX(110%)",
  };

  return (
    <nav className={styles.container_nav}>
      <h3>NC Games</h3>
      <ul className= {styles['container_navbar-links']}>
       
        <li className={styles.navbar_link}>
          <NavLink
            to="/reviews"
            onClick={resetScroll}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            
          >
            Reviews
          </NavLink>
        </li>
        <li className={styles.navbar_link}>
          <NavLink
            to="/users"
            onClick={resetScroll}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Users
          </NavLink>
        </li>
        <li className={styles.navbar_link}>
          <NavLink to="/categories" onClick={resetScroll} style={({isActive}) => (isActive ? activeStyle : undefined)}>
            Categories
          </NavLink>
        </li>
      </ul>
      <UserSettings />
    </nav>
  );
}
