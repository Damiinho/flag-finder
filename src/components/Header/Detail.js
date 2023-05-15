import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SettingsIMG from "../../img/settings.svg";

const Detail = () => {
  const { selectedSmallOne, setSelectedSmallOne, setIsSelectors, windowWidth } =
    useContext(AppContext);

  const handleClick = () => {
    setSelectedSmallOne("");
    setIsSelectors(true);
  };

  let region = "";
  if (selectedSmallOne) {
    if (selectedSmallOne.regions[0] === "europe") {
      region = "Europa";
    } else if (selectedSmallOne.regions[0] === "south-america") {
      region = "Ameryka Południowa";
    } else if (selectedSmallOne.regions[0] === "north-america") {
      region = "Ameryka Północna";
    } else if (selectedSmallOne.regions[0] === "asia") {
      region = "Azja";
    } else if (selectedSmallOne.regions[0] === "africa") {
      region = "Afryka";
    } else if (selectedSmallOne.regions[0] === "oceania") {
      region = "Australia/Oceania";
    } else if (selectedSmallOne.regions[0] === "carraibean") {
      region = "Karaiby";
    } else if (selectedSmallOne.regions[0] === "antarctica") {
      region = "Antarktyka";
    }
  }

  if (selectedSmallOne) {
    return (
      <>
        {!(windowWidth < 670) ? (
          ""
        ) : (
          <div onClick={handleClick} className="header__detail-box__settings">
            <img src={SettingsIMG} alt="settings" />
            <p>opcje</p>
          </div>
        )}
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
