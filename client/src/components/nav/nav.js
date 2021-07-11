import React, { useEffect } from "react";
import { GiJumpingDog } from "react-icons/gi";
import styles from "./nav.module.css";
function nav() {
  return (
    <div>
      <ul className={styles.menuBar}>
        <GiJumpingDog></GiJumpingDog>
        <li>Dogs</li>
        <li>Search</li>
        <li>New Dog</li>
      </ul>
    </div>
  );
}

export default nav;
