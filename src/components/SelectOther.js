import React, { useContext } from "react";
import "../style/SelectOther.css";
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
    setOtherShipes,
    setSymbols,
    setRegion,
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
    setOtherShipes(false);
    setSymbols(false);
    setRegion("");
    setIsCountrySelected(false);
  };

  return (
    <div className="other">
      <button
        className={`other countries ${
          isCountrySelected ? "onlycountries" : ""
        }`}
        onClick={handleCountryButton}
      >
        Przeszukaj tylko bazę krajów
      </button>
      <button className="other reset" onClick={handleResetButton}>
        Resetuj
      </button>
    </div>
  );
};

export default SelectOther;
