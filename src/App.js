// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "./jokeSlice";

function App() {
  const dispatch = useDispatch();
  const { data: jokes, loading, error } = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="App">
      <h1>Joke App</h1>
      <div>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
