import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

import "../styles/App.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      // console.log(json);
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

  const RenderContent = () => {
    return (
      <div
        className="RenderContent"
        style={{
          paddingTop: "10px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          width: "800px",
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Card author={item.title} />
              </div>
              <h1
                style={{
                  color: "coral",
                }}
              ></h1>
              <></>
            </div>
          );
        })}
      </div>
    );
  };
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RenderContent />
        </div>
      )}

      <></>
    </div>
  );
}
