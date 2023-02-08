import { NavLink } from 'react-router-dom';
import UserSettings from './UserSettings';
import styles from './Nav.module.css';

export default function Nav() {
  function resetScroll() {
    window.scrollTo(0, 0);
  }

  let activeStyle = {
    textShadow: "0 10px 5px #fff",
    transform: "scaleX(110%)",
  };

  return (
    <nav className={styles.container_nav}>
      <h3>NC Games</h3>
      <ul className= {styles['container_navbar-links']}>
       
        <li className="navbar_link">
          <NavLink
            to="/reviews"
            onClick={resetScroll}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Reviews
          </NavLink>
        </li>
        <li className="navbar_link">
          <NavLink
            to="/users"
            onClick={resetScroll}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <UserSettings />
    </nav>
  );
}
