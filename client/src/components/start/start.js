/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import styles from "./start.module.css";
function Start() {
  return (
    <div>
      <img
        className={styles.img}
        src="https://dogemuchwow.com/wp-content/uploads/2025/03/starry-doge-nightsky.jpg"
        alt="img"
      />
      <h1>Welcome</h1>
      <Link to="/home">
        <GrLinkNext></GrLinkNext>
      </Link>
    </div>
  );
}

export default Start;
