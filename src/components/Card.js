import React from "react";

import pagecover from "../assets/pagecover.png";

export default function Card(props) {
  return (
    <div>
      <div className="CardImage">
        <img src={pagecover} alt="Card" />
      </div>
      <div className="Author">
        <h2>{props.author}</h2>
      </div>
    </div>
  );
}
