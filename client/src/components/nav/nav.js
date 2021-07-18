import React from "react";
import { Link } from "react-router-dom";
import { GiJumpingDog } from "react-icons/gi";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div>
      <ul className={styles.menuBar}>
        <GiJumpingDog></GiJumpingDog>
        <Link to="/home">Dogs</Link>
        <li>Search</li>
        <Link to="/home/newdog">New Dog</Link>
      </ul>
    </div>
  );
};

export default Nav;
