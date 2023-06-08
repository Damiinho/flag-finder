import { useContext } from "react";
import Select from "react-select";
import { GameContext } from "../../../contexts/GameContext";

const options = [
  { value: "europe", label: "Europa" },
  { value: "south-america", label: "Ameryka Południowa" },
  { value: "north-america", label: "Ameryka Północna" },
  { value: "asia", label: "Azja" },
  { value: "africa", label: "Afryka" },
  { value: "oceania", label: "Australia/Oceania" },
  { value: "carraibean", label: "Karaiby" },
  { value: "antarctica", label: "Antarktyka" },
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

const SelectRegions = () => {
  const { settingsRegions, setSettingsRegions } = useContext(GameContext);

  const handleSelectRegions = (item) => {
    setSettingsRegions(item);
  };

  return (
    <div className="main-game__settings-box__regions">
      <div className="main-game__settings-box__regions-title">
        <p>Wybierz regiony:</p>
      </div>
      <Select
        isMulti
        placeholder="cały świat"
        className="main-game__settings-box__mode__selector"
        value={settingsRegions}
        styles={styles}
        onChange={(item) => handleSelectRegions(item)}
        options={options}
      />
    </div>
  );
};

export default SelectRegions;
