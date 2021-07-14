import React, { useEffect } from "react";
import { GiJumpingDog } from "react-icons/gi";
import Search from "../Search/Search";
import styles from "./nav.module.css";

function nav() {
  return (
    <div>
      <ul className={styles.menuBar}>
        <GiJumpingDog></GiJumpingDog>
        <li>Dogs</li>
        <li>Search</li>
        <li>New Dog</li>
        <Search></Search>
      </ul>
    </div>
  );
}

export default nav;
