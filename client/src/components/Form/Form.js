import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../store/actions";
import Footer from "../Footer/Footer";

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
      let post = await axios.post("http://localhost:3001/dog", input);
      console.log(post);
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
    <div className="backGCreate">
      <form className="createCard" onSubmit={handleSubmit}>
        <p>ENTER NAME</p>
        <input
          className="createName"
          value={input.name}
          name="name"
          type="text"
          required="required"
          placeholder="Name"
          onChange={handleInputChange}
        ></input>
        <p>ENTER WEIGHT</p>
        <input
          className="createWeight"
          value={input.weight}
          name="weight"
          type="number"
          required="required"
          placeholder="Weight"
          onChange={handleInputChange}
        ></input>
        <p>ENTER HEIGHT</p>
        <input
          className="createHeight"
          value={input.height}
          name="height"
          type="number"
          required="required"
          placeholder="Height"
          onChange={handleInputChange}
        ></input>
        <p>ENTER LIFE_SPAN</p>
        <input
          className="createYears"
          value={input.years}
          name="years"
          type="number"
          required="required"
          placeholder="Life_span"
          onChange={handleInputChange}
        ></input>
        <p>SELECT TEMPERAMENTS (UP TO 3)</p>
        <select
          id="uid"
          className="createTemps"
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
          className="createTemps"
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

        <input className="createButton" type="submit" value="CREATE"></input>
      </form>
      <Footer />
    </div>
  );
}
