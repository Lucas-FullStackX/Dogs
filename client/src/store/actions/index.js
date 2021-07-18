import axios from "axios";
import { BASE_URL } from "../../const";
const GET_DOGS = "GET_DOGS";
const NEXT = "NEXT";
const PREVIUS = "PREVIUS";

const GET_ALL = "GET_ALL";
const GET_DETAILS = "GET_DETAILS";
const FILTERS = "FILTERS";
const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

const getDetails = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
const apiCall = (p) => async (dispatch, getState) => {
  try {
    const res = await axios.get(BASE_URL + p);
    dispatch({
      type: GET_DOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
const search = (n) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${BASE_URL}?name=${n}`);
    dispatch({
      type: GET_DOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
const nextPage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEXT,
      payload: 1,
    });
  } catch (err) {
    console.log(err);
  }
};
//new
export function filters(nameFront, temperament, sort, order) {
  return async (dispatch) =>
    dispatch({
      type: FILTERS,
      name: await getBreedsName(nameFront),
      temperament: temperament,
      sort: sort,
      order: order,
    });
}
export function getTemperaments() {
  return (dispatch) => {
    axios.get(`http://localhost:3001/temperament`).then((response) => {
      dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
    });
  };
}
const getBreedsName = async function (nameFront) {
  const response = await axios.get(`${BASE_URL}?name=${nameFront}`);
  const breeds = response.data;
  return breeds;
};
//old
const previusPage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREVIUS,
      payload: 1,
    });
  } catch (err) {
    console.log(err);
  }
};
export {
  FILTERS,
  getDetails,
  search,
  previusPage,
  apiCall,
  nextPage,
  GET_DOGS,
  NEXT,
  PREVIUS,
  GET_ALL,
  GET_TEMPERAMENTS,
  GET_DETAILS,
};
