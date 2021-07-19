import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./home.module.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { apiCall, nextPage, previusPage } from "../../store/actions";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
const Home = () => {
  const dispatch = useDispatch();
  const dog = useSelector((store) => store.dogs.dogs);
  const page = useSelector((store) => store.dogs.page);
  const loading = useSelector((store) => store.dogs.loading);
  useEffect(() => {
    dispatch(apiCall(`?page=${page}`));
  }, [dispatch, page]);

  return (
    <div className={styles.home}>
      {loading && <Loading />}
      <div className={styles.cards}>
        {dog ? dog.map((i) => <Card dog={i} key={i.id} />) : <Loading />}
      </div>
      {page !== 1 && (
        <button
          className={styles.arrow}
          onClick={() => dispatch(previusPage())}
        >
          <IoMdArrowRoundBack></IoMdArrowRoundBack>
        </button>
      )}
      <button className={styles.main}>{page}</button>
      {dog.length >= 8 && (
        <button className={styles.arrow} onClick={() => dispatch(nextPage())}>
          <IoMdArrowRoundForward></IoMdArrowRoundForward>
        </button>
      )}
      <Footer />
    </div>
  );
};
export default Home;
