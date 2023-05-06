import { useContext } from "react";
import Select from "react-select";
import { GameContext } from "../../../contexts/GameContext";

const SelectVariants = () => {
  const { settingsVariants, setSettingsVariants } = useContext(GameContext);

  const handleSelectVariant = (item) => {
    setSettingsVariants(item.value);
  };

  const options = [
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
  ];

  const styles = {
    input: (provided) => ({
      ...provided,
      color: "#999",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#999" : "#999",
      backgroundColor: state.isSelected
        ? "#201e3b"
        : state.isFocused
        ? "#201e3b"
        : "#3d386e",
      cursor: "pointer",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#7e78a35e",
      border: "none",
      cursor: "pointer",
      width: "225px",
    }),
    menu: (provided) => ({
      ...provided,
      padding: 0,
      borderRadius: "15px",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#999" }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: "#3d386e",
      borderRadius: "10px",
    }),
  };

  return (
    <div className="main-game__settings-box__variants">
      Wybierz liczbę wariantów odpowiedzi:
      <Select
        placeholder="domyślnie"
        className="main-game__settings-box__variants-selector"
        value={options.find((option) => option.value === settingsVariants)}
        styles={styles}
        onChange={(item) => handleSelectVariant(item)}
        options={options}
      />
    </div>
  );
};

export default SelectVariants;
