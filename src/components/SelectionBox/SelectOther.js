import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const SelectOther = () => {
  const {
    isCountrySelected,
    setIsCountrySelected,
    setRegions,
    setSelectedSmallOne,
    setInputValue,
    setSearchTerm,
    setSelectedShapes,
    setSelectedColors,
  } = useContext(AppContext);
  const handleCountryButton = () => {
    setIsCountrySelected(!isCountrySelected);
  };

  const handleResetButton = () => {
    setRegions([]);
    setIsCountrySelected(false);
    setSelectedSmallOne(null);
    setInputValue("");
    setSearchTerm("");
    setSelectedShapes([]);
    setSelectedColors([]);
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
        <p>reset</p>
      </button>
    </div>
  );
};

export default SelectOther;
