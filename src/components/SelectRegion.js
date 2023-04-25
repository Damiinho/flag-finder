import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Select from "react-select";

const SelectRegion = () => {
  const { region, setRegion } = useContext(AppContext);

  const setActiveRegion = (item) => {
    setRegion(item);
  };

  const options = [
    { value: "", label: "dowolny" },
    { value: "europe", label: "Europa" },
    { value: "asia", label: "Azja" },
    { value: "oceania", label: "Australia/Oceania" },
    { value: "africa", label: "Afryka" },
    { value: "north-america", label: "Ameryka Północna" },
    { value: "south-america", label: "Ameryka Południowa" },
    { value: "carraibean", label: "Karaiby" },
    { value: "antarctica", label: "Antarktyka" },
  ];

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#999" : "#999",
      backgroundColor: state.isSelected ? "#201e3b" : "#3d386e",
      cursor: "pointer",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#3d386e",
      border: "none",
      // boxShadow: "none",
      cursor: "pointer",
      width: "200px",
    }),
    menu: (provided) => ({
      ...provided,
      padding: 0,
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#999" }),
    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: "#3d386e",
    }),
  };

  return (
    <div className="selectors__region">
      <p className="selectors__region-description">regiony</p>
      <div className="selectors__region__button-box">
        <Select
          className="selectors__region__button-box__selector"
          value={{
            value: region,
            label: region
              ? options.find((o) => o.value === region).label
              : "dowolny",
          }}
          styles={customStyles}
          onChange={(selectedOption) => setActiveRegion(selectedOption.value)}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectRegion;
