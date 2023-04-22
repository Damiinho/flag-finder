import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Select = () => {
  const { inputValue, setInputValue } = useContext(AppContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <p>Wybierz opcje, na podstawie których chcesz wyszukać</p>
      <input
        className="selectors-input"
        placeholder="wpisz nazwę kraju"
        value={inputValue}
        onChange={handleInputChange}
      />
      <SelectColor />
      <SelectStripes />
      <SelectRegion />
      <SelectOther />
    </>
  );
};

export default Select;
