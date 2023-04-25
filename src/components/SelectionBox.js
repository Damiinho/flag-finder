import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const SelectionBox = () => {
  const { inputValue, setInputValue, windowWidth } = useContext(AppContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="main__select-box__selectors">
      {windowWidth > 670 ? (
        <p className="selectors__description">
          Wybierz opcje, na podstawie których chcesz wyszukać
        </p>
      ) : null}
      <input
        className="selectors__input"
        placeholder="wpisz nazwę kraju"
        value={inputValue}
        onChange={handleInputChange}
      />
      <SelectColor />
      <SelectStripes />
      <SelectRegion />
      <SelectOther />
    </div>
  );
};

export default SelectionBox;
