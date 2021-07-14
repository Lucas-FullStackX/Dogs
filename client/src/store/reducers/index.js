import {
  GET_DOGS,
  NEXT,
  PREVIUS,
  AZ,
  ZA,
  TEMP,
  GET_ALL,
  getTemps,
} from "../actions/index";
const initialState = {
  allDogs: [],
  dogs: [],
  temperaments: [],
  selectedTempDogs: [],
  page: 1,
  loading: true,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_ALL:
      return {
        ...state,
        allDogs: action.payload,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + action.payload,
      };
    case PREVIUS:
      return {
        ...state,
        page: state.page - action.payload,
      };
    case TEMP:
      return {
        ...state,
        dogs: getTemps(state.allDogs, action.payload),
      };
    case AZ:
      return {
        ...state,
        dogs: action.payload,
      };
    case ZA:
      return {
        ...state,
        dogs: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
