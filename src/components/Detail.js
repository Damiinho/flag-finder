import React, { useContext } from "react";
import "..//style/Detail.css";
import { AppContext } from "../contexts/AppContext";

const Detail = () => {
  const { selectedSmallOne } = useContext(AppContext);

  let region = "";
  if (selectedSmallOne) {
    if (selectedSmallOne.region === "europe") {
      region = "Europa";
    } else if (selectedSmallOne.region === "south-america") {
      region = "Ameryka Południowa";
    } else if (selectedSmallOne.region === "north-america") {
      region = "Ameryka Północna";
    } else if (selectedSmallOne.region === "asia") {
      region = "Azja";
    } else if (selectedSmallOne.region === "africa") {
      region = "Afryka";
    } else if (selectedSmallOne.region === "oceania") {
      region = "Australia/Oceania";
    } else if (selectedSmallOne.region === "carraibean") {
      region = "Karaiby";
    } else if (selectedSmallOne.region === "antarctica") {
      region = "Antarktyka";
    }
  }

  if (selectedSmallOne) {
    return (
      <div class="detail">
        <p>{selectedSmallOne.name}</p>
        <p>Region: {region}</p>
        <img src={selectedSmallOne.img} alt={selectedSmallOne.name} />
      </div>
    );
  } else
    return (
      <div class="detail">
        <p>
          Jeśli naciśniesz flagę z listy poniżej, tutaj wyświetli się kilka
          danych.
        </p>
      </div>
    );
};

export default Detail;
