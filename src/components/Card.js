import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <>
      <div className="CardImage">
        <img className="card-image" src={props.pagecover} alt="Card" />
      </div>
      <div className="Author"> {/* <h2>{props.author}</h2> */}</div>
    </>
  );
}
