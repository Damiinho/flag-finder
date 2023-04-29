import SelectColor from "./SelectColor";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import SelectSearch from "./SelectSearch";
import SelectShape from "./SelectShape";

const SelectionBox = () => {
  return (
    <div className="main__select-box__selectors">
      <SelectSearch />
      <SelectRegion />
      <SelectColor />
      <SelectShape />
      <SelectOther />
    </div>
  );
};

export default SelectionBox;
