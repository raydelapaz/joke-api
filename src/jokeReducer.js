import {
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
} from "./jokeActions";

const initialState = {
  jokes: [],
  loading: false,
  error: null,
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: action.payload,
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jokeReducer;
