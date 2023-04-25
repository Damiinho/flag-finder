import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import SelectSearch from "./SelectSearch";

const SelectionBox = () => {
  const { windowWidth } = useContext(AppContext);

  return (
    <div className="main__select-box__selectors">
      {windowWidth > 670 ? (
        <p className="selectors__description">
          Wybierz opcje, na podstawie których chcesz wyszukać
        </p>
      ) : null}
      <SelectSearch />
      <SelectRegion />
      <SelectColor />
      <SelectStripes />
      <SelectOther />
    </div>
  );
};

export default SelectionBox;
