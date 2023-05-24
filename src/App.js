import React, { useState } from "react";
import axios from "axios";
import "./style.css";
const App = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      setError(false);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <button onClick={getData}>get data</button>
      )}

      {error && <p>Error</p>}

      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </>
  );
};

export default App;
