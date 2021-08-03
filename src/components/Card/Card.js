import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
  const { dog } = props;

  return (
    <div className={styles.card}>
      <img src={dog.image} alt={dog.name} className={styles.image}></img>
      <Link to={`/home/${dog.id}`} className={styles.name}>
        {dog.name}
      </Link>
      <p className={styles.temp}>{dog.temperament}</p>
    </div>
  );
}
