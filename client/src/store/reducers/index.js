import {
  GET_DOGS,
  NEXT,
  PREVIUS,
  FILTERS,
  GET_DETAILS,
  LOADING,
  GET_TEMPERAMENTS,
} from "../actions/index";
const initialState = {
  dogDetails: [],
  dogs: [],
  temperaments: [],
  page: 1,
  loading: false,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
        loading: false,
      };
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAILS:
      return {
        ...state,
        dogDetails: action.payload,
        loading: false,
      };

    case NEXT:
      return {
        ...state,
        page: state.page + action.payload,
        loading: false,
      };
    case PREVIUS:
      return {
        ...state,
        page: state.page - action.payload,
        loading: false,
      };
    case FILTERS:
      if (action.type === FILTERS) {
        let filteredBreeds = undefined;
        // FILTER BREEDS
        if (action.temperament === "Select Temperaments") {
          filteredBreeds = action.name;
          console.log("LLEGO ACA?", filteredBreeds);
        } else {
          filteredBreeds = action.name.filter((b) =>
            b.temperament ? b.temperament.includes(action.temperament) : null
          );
        }

        // SORT BREEDS
        if (action.sort === "weight") {
          filteredBreeds.sort((a, b) => {
            if (a.weight) {
              let weights = a.weight.split(" - ");
              var amin = Number(weights[0]);
              if (weights[1])
                amin = (Number(weights[1]) + Number(weights[0])) / 2;
            } else if (!a.weight) amin = a.weight;

            if (b.weight) {
              let weights = b.weight.split(" - ");
              var bmin = Number(weights[0]);
              if (weights[1])
                bmin = (Number(weights[1]) + Number(weights[0])) / 2;
            } else if (!b.weight) bmin = b.weight;

            return amin - bmin;
          });
          if (action.order === "descending") filteredBreeds.reverse();
          return {
            ...state,
            dogs: filteredBreeds,
          };
        }

        if (action.sort === "name") {
          filteredBreeds.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
            return 0;
          });
          if (action.order === "descending") filteredBreeds.reverse();
          return {
            ...state,
            dogs: filteredBreeds,
          };
        }
      }
      break;

    default:
      return { ...state };
  }
}

export default rootReducer;
