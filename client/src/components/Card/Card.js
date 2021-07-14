import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  const { dog } = props;
  return (
    <div className={styles.card}>
      <img src={dog.image} alt={dog.name} className={styles.image}></img>
      <p className={styles.name}>{dog.name}</p>
      {dog.temperament.map((i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  );
}
