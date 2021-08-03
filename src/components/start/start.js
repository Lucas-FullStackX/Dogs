/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./start.module.css";
function Start() {
  return (
    <div className={styles.start}>
      <img
        className={styles.img}
        src="https://dogemuchwow.com/wp-content/uploads/2025/03/starry-doge-nightsky.jpg"
        alt="img"
      />
      <h1>Welcome</h1>
      <Link to="/home">
        <IoIosArrowDroprightCircle />
      </Link>
    </div>
  );
}

export default Start;
