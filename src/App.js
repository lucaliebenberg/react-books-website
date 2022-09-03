// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      console.log("====================================");
      console.log(json);
      console.log("====================================");
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Header />
      {loading ? (
        <>
          <h1
            style={{
              color: "red",
            }}
          >
            Loading...
          </h1>
        </>
      ) : (
        <>
          <h1
            style={{
              color: "green",
            }}
          >
            Done loading
          </h1>
          <>
            {data.map((item) => {
              return (
                <div>
                  <h1
                    style={{
                      color: "coral",
                    }}
                  >
                    {item.title}
                    <div>{item.releaseYear}</div>
                  </h1>
                  <></>
                </div>
              );
            })}
          </>
        </>
      )}

      <></>
    </div>
  );
}
