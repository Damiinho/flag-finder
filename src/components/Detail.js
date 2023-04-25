import React, { useContext } from "react";
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
      <>
        <div className="header__datail-box__text">
          <h1 className="header__datail-box__text-title">
            {selectedSmallOne.name}
          </h1>
          <p className="header__datail-box__text-description">{region}</p>
        </div>
        <div className="header__datail-box__img">
          <img src={selectedSmallOne.img} alt={selectedSmallOne.name} />
        </div>
      </>
    );
  } else
    return (
      <div className="header__datail-box__text">
        <p>// tu pojawią się dane wybranej flagi</p>
      </div>
    );
};

export default Detail;
