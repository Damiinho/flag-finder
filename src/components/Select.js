import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";

const Select = () => {
  return (
    <>
      <p>Wybierz opcje, na podstawie których chcesz wyszukać:</p>
      <SelectColor />
      <SelectStripes />
      <SelectRegion />
      <SelectOther />
    </>
  );
};

export default Select;
