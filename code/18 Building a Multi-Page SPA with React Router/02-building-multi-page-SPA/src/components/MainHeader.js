import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const setActive = ({ isActive }) => (isActive ? classes.active : "");

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={setActive} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
