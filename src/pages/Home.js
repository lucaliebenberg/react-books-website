import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import bookData from "../assets/bookData.json";

import "../styles/App.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooks = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      myHeaders.append("X-RapidAPI-Host", "hapi-books.p.rapidapi.com");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "https://hapi-books.p.rapidapi.com/month/2022/3",
        requestOptions
      );
      const json = await response.json();
      console.log("This is the response json", json);

      if (response.status == 429) {
        console.log("====================================");
        console.log("this is the response message", response.status);
        console.log("====================================");
        setData(bookData);
      } else {
        console.log("The response message is valid");
        setData(json);
      }
    } catch (error) {
      setData(bookData);
      setLoading(false);

      console.error("HERE IS THE ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
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
        {/* {bookData.map((item) => { */}
        {data.map((item) => {
          return (
            <div
              key={item.book_id}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Card author={item.name} pagecover={item.cover} />
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
