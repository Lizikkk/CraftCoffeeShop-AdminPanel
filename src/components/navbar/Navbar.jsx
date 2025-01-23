import coffeeIcon from "../../assets/coffee.svg";
import groceryIcon from "../../assets/grocery.svg";

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>Admin Console</h2>
      <div className={styles.menu}>
        <div
          className={`${styles.menuItem} ${
            location.pathname === "/" ? styles.active : ""
          }`}
          onClick={() => handleMenuClick("/")}
        >
          <img src={coffeeIcon} alt="Coffee" className={styles.icon} />
          <span>Coffee</span>
        </div>
        <div
          className={`${styles.menuItem} ${
            location.pathname === "/ingredients" ? styles.active : ""
          }`}
          onClick={() => handleMenuClick("/ingredients")}
        >
          <img src={groceryIcon} alt="Ingredients" className={styles.icon} />
          <span>Ingredients</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
