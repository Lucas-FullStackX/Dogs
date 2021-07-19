import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../store/actions";
import Footer from "../Footer/Footer";
import styles from "./Form.module.css";
export default function Form() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dbTemperaments = () => {
      dispatch(getTemperaments());
    };
    dbTemperaments();
  }, [dispatch]);
  const [newTemp, setNewTemp] = useState({
    temp: "",
  });
  const [creado, setCreado] = useState(false);
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    years: "",
    temperament: [],
  });
  const temperaments = useSelector((state) => state.dogs.temperaments);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      input.temperament.push(newTemp.temp);
      setCreado(true);
      let post = await axios.post("http://localhost:3001/dog", input);
      console.log(post);
      setTimeout(
        () => (document.location.href = "http://localhost:3000/home"),
        1000
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleTempChange = (e) => {
    console.log([e.target.value]);
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };
  const handleTempChanges = (e) => {
    console.log([e.target.value]);
    setNewTemp({
      ...newTemp,
      temp: e.target.value,
    });
  };

  return (
    <>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Create your Dog!</h1>
          <p>Name</p>
          <input
            value={input.name}
            className={styles.nameForm}
            name="name"
            type="text"
            required="required"
            placeholder="Name"
            onChange={handleInputChange}
          ></input>
          <p>Weight</p>
          <input
            className={styles.weight}
            min="1"
            value={input.weight}
            name="weight"
            type="number"
            required="required"
            placeholder="Weight"
            onChange={handleInputChange}
          ></input>
          <p>Height</p>
          <input
            className={styles.height}
            min="1"
            value={input.height}
            name="height"
            type="number"
            required="required"
            placeholder="Height"
            onChange={handleInputChange}
          ></input>
          <p>Life Span</p>
          <input
            className={styles.life}
            min="1"
            value={input.years}
            name="years"
            type="number"
            required="required"
            placeholder="Life Span"
            onChange={handleInputChange}
          ></input>
          <p>Select Temperaments</p>
          <select
            id="uid"
            className={styles.temperament}
            name="temperament"
            required="required"
            onChange={handleTempChange}
          >
            <option value="">Add Temperaments</option>
            {temperaments &&
              temperaments.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
          </select>
          <select
            className={styles.temperament}
            name="temp"
            required="required"
            onChange={handleTempChanges}
          >
            <option value="">Add Temperaments</option>
            {temperaments &&
              temperaments.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
          </select>

          <input className={styles.submit} type="submit" value="CREATE"></input>
          {creado && (
            <div className={styles.created}>
              {input.name} has been created successfully!
            </div>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
