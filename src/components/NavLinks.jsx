// react router dom
import { NavLink } from "react-router-dom";

// css
import styles from "../css/navlinks.module.css";
import "../index.css";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "HEADPHONES",
    path: "/headphones",
  },
  {
    id: 3,
    text: "SPEAKERS",
    path: "/speakers",
  },
  {
    id: 4,
    text: "EARPHONES",
    path: "/earphones",
  },
];

function NavLinks() {
  return (
    <ul className={styles.navlist}>
      {links.map((link) => (
        <li className={styles.navitem} key={link.id}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
