import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { GameContext } from "../../../contexts/GameContext";
import Select from "react-select";

const optionsFlag = [
  { value: "flagToCountry", label: "widok flagi, zgadnij kraj" },
  { value: "countryToFlag", label: "widok nazwy kraju, zgadnij flagę" },
];
const optionsCapital = [
  { value: "flagToCapital", label: "widok flagi, zgadnij kraj" },
  { value: "countryToCapital", label: "widok nazwy kraju, zgadnij flagę" },
  { value: "capitalToCountry", label: "widok nazwy kraju, zgadnij flagę" },
];

const styles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "white" : "white",
    backgroundColor: state.isFocused ? "#52b054" : "#090628",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "2px",
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#090628",
    border: "none",
    cursor: "pointer",
    width: "100%",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    borderRadius: "15px",
    color: "white",
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "white",
    letterSpacing: "2px",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#090628",
    borderRadius: "10px",
    color: "white",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "white",
    letterSpacing: "2px",
  }),
};

const SelectFormat = () => {
  const { isGame } = useContext(AppContext);
  const { settingsFormat, setSettingsFormat } = useContext(GameContext);

  const handleSelectFormat = (item) => {
    setSettingsFormat(item);
  };

  return (
    <div className="main-game__settings-box__format">
      <div className="main-game__settings-box__format-title">
        <p>Wybierz format:</p>
      </div>

      <Select
        placeholder="wybierz tryb"
        className="main-game__settings-box__format__selector"
        value={settingsFormat}
        styles={styles}
        onChange={(item) => handleSelectFormat(item)}
        options={
          isGame === "flag"
            ? optionsFlag
            : isGame === "capital"
            ? optionsCapital
            : ""
        }
      />
    </div>
  );
};

export default SelectFormat;
