import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./home.module.css";
const Home = () => {
  const [dog, setDog] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiCall();
  }, [page]);
  const apiCall = async () => {
    if (page > 1) {
      const data = await fetch("http://localhost:3001/dog/" + page);
      const dogs = await data.json();
      return setDog(dogs);
    }
    const data = await fetch("http://localhost:3001/dogs");
    const dogs = await data.json();
    setDog(dogs);
  };
  const next = (value) => {
    setPage(page + value);
  };
  const previous = (value) => {
    setPage(page - value);
  };
  return (
    <div>
      <h1>Home</h1>
      <div className={styles.cards}>
        {dog.map((i) => (
          <Card dog={i} key={i.id} />
        ))}
        {page !== 1 && <button onClick={() => previous(1)}>-1</button>}
        <button>{page}</button>
        <button onClick={() => next(1)}>+1</button>
      </div>
    </div>
  );
};
export default Home;
