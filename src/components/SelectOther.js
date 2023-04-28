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
    setNavyBlue,
    setGreen,
    setOrange,
    setClaret,
    setVerticalStripes,
    setHorizontalStripes,
    setOtherShapes,
    setSymbols,
    setRegions,
    setSelectedSmallOne,
    setInputValue,
    setSearchTerm,
    setSelectedShapes,
    // setSelectedColors,
  } = useContext(AppContext);
  const handleCountryButton = () => {
    setIsCountrySelected(!isCountrySelected);
  };

  const handleResetButton = () => {
    setRed(false);
    setClaret(false);
    setWhite(false);
    setBlack(false);
    setYellow(false);
    setBlue(false);
    setNavyBlue(false);
    setGreen(false);
    setOrange(false);
    setVerticalStripes(false);
    setHorizontalStripes(false);
    setOtherShapes(false);
    setSymbols(false);
    setRegions([]);
    setIsCountrySelected(false);
    setSelectedSmallOne(null);
    setInputValue("");
    setSearchTerm("");
    setSelectedShapes([]);
    // setSelectedColors([]);
  };

  return (
    <div className="selectors__other">
      <button
        className={`other countries ${isCountrySelected ? "active" : ""}`}
        onClick={handleCountryButton}
      >
        <p>tylko państwa</p>
      </button>
      {/* <label className="other countries">
        tylko państwa <input type="checkbox" />
      </label> */}

      <button className="other reset" onClick={handleResetButton}>
        <p>reset</p>
      </button>
    </div>
  );
};

export default SelectOther;
