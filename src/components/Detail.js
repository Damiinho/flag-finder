import React from "react";
import "..//style/Detail.css";

const Detail = (props) => {
  if (props.data.region === "europe") {
    props.data.region = "Europa";
  } else if (props.data.region === "south-america") {
    props.data.region = "Ameryka Południowa";
  } else if (props.data.region === "north-america") {
    props.data.region = "Ameryka Północna";
  } else if (props.data.region === "asia") {
    props.data.region = "Azja";
  } else if (props.data.region === "africa") {
    props.data.region = "Afryka";
  } else if (props.data.region === "oceania") {
    props.data.region = "Australia/Oceania";
  } else if (props.data.region === "carraibean") {
    props.data.region = "Karaiby";
  } else if (props.data.region === "antarctica") {
    props.data.region = "Antarktyka";
  }

  if (props.data.name) {
    return (
      <div class="detail">
        <p>{props.data.name}</p>
        <p>Region: {props.data.region}</p>
        <img src={props.data.img} alt={props.data.name} />
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
