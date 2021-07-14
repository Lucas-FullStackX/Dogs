import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./home.module.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import {
  apiCall,
  nextPage,
  previusPage,
  filterZA,
  filterAZ,
  filTemp,
  getAll,
} from "../../store/actions";
const Home = () => {
  const dispatch = useDispatch();
  const dog = useSelector((store) => store.dogs.dogs);
  const page = useSelector((store) => store.dogs.page);
  useEffect(() => {
    dispatch(apiCall(`?page=${page}`));
  }, [page]);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className={styles.cards}>
        {dog.map((i) => (
          <Card dog={i} key={i.id} />
        ))}
      </div>
      <button onClick={() => dispatch(filterAZ(`?page=${page}`))}>A-Z</button>
      <button onClick={() => dispatch(filterZA(`?page=${page}`))}>Z-A</button>
      <button onClick={() => dispatch(filTemp("Brave"))}>Brave</button>
      {page != 1 && (
        <button onClick={() => dispatch(previusPage())}>
          <IoMdArrowRoundBack></IoMdArrowRoundBack>
        </button>
      )}
      <button>{page}</button>
      <button onClick={() => dispatch(nextPage())}>
        <IoMdArrowRoundForward></IoMdArrowRoundForward>
      </button>
    </div>
  );
};
export default Home;
