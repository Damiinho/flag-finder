import React, { useContext } from "react";
import "../style/SelectColor.css";
import { AppContext } from "../contexts/AppContext";

const SelectColor = () => {
  const {
    red,
    setRed,
    white,
    setWhite,
    black,
    setBlack,
    yellow,
    setYellow,
    blue,
    setBlue,
    green,
    setGreen,
    orange,
    setOrange,
  } = useContext(AppContext);

  return (
    <div className="colors">
      <button
        className={`color red ${red ? "active" : ""}`}
        onClick={() => {
          setRed(!red);
        }}
      >
        Czerwony
      </button>
      <button
        className={`color white ${white ? "active" : ""}`}
        onClick={() => {
          setWhite(!white);
        }}
      >
        Biały
      </button>
      <button
        className={`color black ${black ? "active" : ""}`}
        onClick={() => {
          setBlack(!black);
        }}
      >
        Czarny
      </button>
      <button
        className={`color yellow ${yellow ? "active" : ""}`}
        onClick={() => {
          setYellow(!yellow);
        }}
      >
        Żółty
      </button>
      <button
        className={`color blue ${blue ? "active" : ""}`}
        onClick={() => {
          setBlue(!blue);
        }}
      >
        Niebieski
      </button>
      <button
        className={`color green ${green ? "active" : ""}`}
        onClick={() => {
          setGreen(!green);
        }}
      >
        Zielony
      </button>
      <button
        className={`color orange ${orange ? "active" : ""}`}
        onClick={() => {
          setOrange(!orange);
        }}
      >
        Pomarańczowy
      </button>
      {/* Zaznaczone: {props.selected.join(", ")} */}
    </div>
  );
};

export default SelectColor;
