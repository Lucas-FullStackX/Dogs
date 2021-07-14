import axios from "axios";
import { BASE_URL, ALL_URL } from "../../const";
const GET_DOGS = "GET_DOGS";
const NEXT = "NEXT";
const PREVIUS = "PREVIUS";
const AZ = "AZ";
const ZA = "ZA";
const TEMP = "TEMP";
const GET_ALL = "GET_ALL";

const getAll = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(ALL_URL);
    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
const apiCall = (p) => async (dispatch, getState) => {
  try {
    console.log(p);
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
    console.log(n);
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
const filterAZ = (p) => async (dispatch, getState) => {
  try {
    const res = await axios.get(BASE_URL + p);
    const az = res.data.sort((i, j) => {
      if (i.name < j.name) {
        return -1;
      }
      if (i.name > j.name) {
        return 1;
      }
      return 0;
    });
    dispatch({
      type: AZ,
      payload: az,
    });
  } catch (err) {
    console.log(err);
  }
};
const filterZA = (p) => async (dispatch, getState) => {
  try {
    const res = await axios.get(BASE_URL + p);
    const za = res.data.sort((i, j) => {
      if (i.name < j.name) {
        return 1;
      }
      if (i.name > j.name) {
        return -1;
      }
      return 0;
    });
    dispatch({
      type: ZA,
      payload: za,
    });
  } catch (err) {
    console.log(err);
  }
};

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
const filTemp = (p) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEMP,
      payload: p,
    });
  } catch (err) {
    console.log(err);
  }
};
const getTemps = async function (arr, temp) {
  let counter = [];
  for (let i = 0; i < arr.length; i++) {
    let nose = await arr[i].temperament.filter((a) => a === temp);
    if (nose.length > 0) {
      counter.push(arr[i]);
    }
  }
  return counter;
};
export {
  getAll,
  getTemps,
  filTemp,
  filterZA,
  filterAZ,
  search,
  previusPage,
  apiCall,
  nextPage,
  GET_DOGS,
  NEXT,
  PREVIUS,
  AZ,
  ZA,
  TEMP,
  GET_ALL,
};
