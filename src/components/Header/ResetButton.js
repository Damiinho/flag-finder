import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const ResetButton = () => {
  const {
    setRegions,
    setIsCountrySelected,
    setSelectedSmallOne,
    setInputValue,
    setSelectedColors,
    setSearchTerm,
    setSelectedShapes,
  } = useContext(AppContext);

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
    <button onClick={handleResetButton} className="header__title-box button">
      reset
    </button>
  );
};

export default ResetButton;
