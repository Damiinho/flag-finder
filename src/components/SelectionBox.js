import SelectColor from "./SelectionBox/SelectColor";
import SelectRegion from "./SelectionBox/SelectRegion";
import SelectOther from "./SelectionBox/SelectOther";
import SelectSearch from "./SelectionBox/SelectSearch";
import SelectShape from "./SelectionBox/SelectShape";
import SelectGame from "./SelectionBox/SelectGame";

const SelectionBox = () => {
  return (
    <>
      <div className="main__select-box__selectors">
        <SelectGame />
        <SelectSearch />
        <SelectRegion />
        <SelectColor />
        <SelectShape />
        <SelectOther />
      </div>
    </>
  );
};

export default SelectionBox;
