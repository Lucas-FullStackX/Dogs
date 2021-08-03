import React from "react";
import { Link } from "react-router-dom";
import { GiJumpingDog } from "react-icons/gi";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div>
      <ul className={styles.menuBar}>
        <Link to="/home">
          <GiJumpingDog></GiJumpingDog>
        </Link>
        <Link to="/home" className={styles.link}>
          Dogs
        </Link>
        <Link to="/home/newdog" className={styles.link}>
          New Dog
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
