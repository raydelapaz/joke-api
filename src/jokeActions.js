import axios from "axios";

export const FETCH_JOKES_REQUEST = "FETCH_JOKES_REQUEST";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

const fetchJokesRequest = () => ({
  type: FETCH_JOKES_REQUEST,
});

const fetchJokesSuccess = (jokes) => ({
  type: FETCH_JOKES_SUCCESS,
  payload: jokes,
});

const fetchJokesFailure = (error) => ({
  type: FETCH_JOKES_FAILURE,
  payload: error,
});

export const fetchJokes = () => {
  return (dispatch) => {
    dispatch(fetchJokesRequest());
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => {
        dispatch(fetchJokesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchJokesFailure(error.message));
      });
  };
};
