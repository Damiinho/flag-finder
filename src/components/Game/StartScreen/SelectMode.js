import { useContext } from "react";
import Select from "react-select";
import { GameContext } from "../../../contexts/GameContext";

const options = [
  { value: "easy", label: "Łatwy" },
  { value: "medium", label: "Średni" },
  { value: "hard", label: "Trudny" },
  { value: "extreme", label: "Ekstremalny" },
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
    fontWeight: "bold",
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
    fontWeight: "bold",
    letterSpacing: "2px",
  }),
};

const SelectMode = () => {
  const {
    settingsMode,
    setSettingsMode,
    setSettingsVariants,
    setSettingsTime,
    setSettingsMistakes,
  } = useContext(GameContext);

  const handleSelectMode = (item) => {
    setSettingsMode(item);
    if (item.value === "easy") {
      setSettingsMistakes(5);
      setSettingsTime(10);
      setSettingsVariants(3);
    }
    if (item.value === "medium") {
      setSettingsMistakes(3);
      setSettingsTime(10);
      setSettingsVariants(4);
    }
    if (item.value === "hard") {
      setSettingsMistakes(1);
      setSettingsTime(4);
      setSettingsVariants(6);
    }
    if (item.value === "extreme") {
      setSettingsMistakes(1);
      setSettingsTime(2);
      setSettingsVariants(7);
    }
  };

  return (
    <div className="main-game__settings-box__mode">
      <div className="main-game__settings-box__mode-title">
        <p>Wybierz tryb gry lub ustaw ręcznie</p>
      </div>

      <Select
        placeholder="wybierz tryb"
        className="main-game__settings-box__mode__selector"
        value={settingsMode}
        styles={styles}
        onChange={(item) => handleSelectMode(item)}
        options={options}
      />
    </div>
  );
};

export default SelectMode;
