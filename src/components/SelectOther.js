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
    setInputValue,
    setSearchTerm,
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
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <div className="selectors__other">
      <button
        className={`other countries ${isCountrySelected ? "active" : ""}`}
        onClick={handleCountryButton}
      >
        <p>tylko państwa</p>
      </button>
      <button className="other reset" onClick={handleResetButton}>
        <p>Reset</p>
      </button>
    </div>
  );
};

export default SelectOther;
