import React from "react";
import styles from "./fnp.module.css";
export default function NotFoundPage() {
  return (
    <div className={styles.fnp}>
      <h1>Not Found Page</h1>
      <img
        src="https://image.flaticon.com/icons/png/512/1156/1156412.png"
        alt="error"
      />

      <img
        src="https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif"
        alt="404"
      />
    </div>
  );
}
