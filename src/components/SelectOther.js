import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const SelectOther = () => {
  const {
    isCountrySelected,
    setIsCountrySelected,
    setRed,
    setWhite,
    setBlack,
    setYellow,
    setBlue,
    setGreen,
    setOrange,
    setVerticalStripes,
    setHorizontalStripes,
    setOtherShapes,
    setSymbols,
    setRegion,
    setSelectedSmallOne,
  } = useContext(AppContext);
  const handleCountryButton = () => {
    setIsCountrySelected(!isCountrySelected);
  };

  const handleResetButton = () => {
    setRed(false);
    setWhite(false);
    setBlack(false);
    setYellow(false);
    setBlue(false);
    setGreen(false);
    setOrange(false);
    setVerticalStripes(false);
    setHorizontalStripes(false);
    setOtherShapes(false);
    setSymbols(false);
    setRegion("");
    setIsCountrySelected(false);
    setSelectedSmallOne(null);
  };

  return (
    <div className="other">
      <button
        className={`other countries ${isCountrySelected ? "active" : ""}`}
        onClick={handleCountryButton}
      >
        <p>Przeszukaj tylko bazę krajów</p>
      </button>
      <button className="other reset" onClick={handleResetButton}>
        <p>Resetuj</p>
      </button>
    </div>
  );
};

export default SelectOther;
