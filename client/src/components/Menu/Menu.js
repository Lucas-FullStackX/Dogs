import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { filters, getTemperaments } from "../../store/actions";

export default function HomeFilters() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.dogs.temperaments);

  const orderBreeds = function (name, temperament, sort, order) {
    dispatch(filters(name, temperament, sort, order));
  };

  useEffect(() => {
    const dbTemperaments = () => {
      dispatch(getTemperaments());
    };
    dbTemperaments();
  }, [dispatch]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    orderBreeds(
      document.getElementById("searchByName").value,
      document.getElementById("searchByTemperament").value,
      document.getElementById("sort").value,
      document.getElementById("order").value
    );
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={onSubmitSearch}>
            <input id="searchByName" type="text"></input>
            <button className="searchButton" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className={styles.wrap}>
          <div className={styles.select}>
            <select id="sort" className={styles.select_text}>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
              <span className={styles.select_highlight}></span>
              <span className={styles.select_bar}></span>
            </select>
          </div>
          <div className={styles.select}>
            <select id="order" className={styles.select_text}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className={styles.select}>
            <span className={styles.select_highlight}></span>
            <span className={styles.select_bar}></span>
            <select id="searchByTemperament" className={styles.select_text}>
              <option value="Select Temperaments">Temperament</option>
              {temperaments &&
                temperaments.map((t) => (
                  <option key={t.id} value={`${t.name}`}>
                    {t.name}
                  </option>
                ))}
            </select>
            <span className={styles.select_highlight}></span>
            <span className={styles.select_bar}></span>
          </div>
        </div>
      </div>
    </>
  );
}
