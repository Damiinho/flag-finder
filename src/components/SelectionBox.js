import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import SelectSearch from "./SelectSearch";

const SelectionBox = () => {
  return (
    <div className="main__select-box__selectors">
      <SelectSearch />
      <SelectRegion />
      <SelectColor />
      <SelectStripes />
      <SelectOther />
    </div>
  );
};

export default SelectionBox;
