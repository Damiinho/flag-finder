import React, { useContext } from "react";
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
      <p>Kolory:</p>
      <button
        className={`color white ${white ? "active" : ""}`}
        onClick={() => {
          setWhite(!white);
        }}
      ></button>
      <button
        className={`color black ${black ? "active" : ""}`}
        onClick={() => {
          setBlack(!black);
        }}
      ></button>
      <button
        className={`color red ${red ? "active" : ""}`}
        onClick={() => {
          setRed(!red);
        }}
      ></button>
      <button
        className={`color yellow ${yellow ? "active" : ""}`}
        onClick={() => {
          setYellow(!yellow);
        }}
      ></button>
      <button
        className={`color blue ${blue ? "active" : ""}`}
        onClick={() => {
          setBlue(!blue);
        }}
      ></button>
      <button
        className={`color green ${green ? "active" : ""}`}
        onClick={() => {
          setGreen(!green);
        }}
      ></button>
      <button
        className={`color orange ${orange ? "active" : ""}`}
        onClick={() => {
          setOrange(!orange);
        }}
      ></button>
      {/* Zaznaczone: {props.selected.join(", ")} */}
    </div>
  );
};

export default SelectColor;
