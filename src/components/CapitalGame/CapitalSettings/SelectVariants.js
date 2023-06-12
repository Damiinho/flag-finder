import { useContext } from "react";
import { CapitalGameContext } from "../../../contexts/CapitalGameContext";

const SelectVariants = () => {
  const { settingsVariants, setSettingsVariants } =
    useContext(CapitalGameContext);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setSettingsVariants(value);
  };

  return (
    <div className="main-game__settings-box__variants">
      <div className="main-game__settings-box__variants-title">
        <p>Warianty odpowiedzi:</p>
        <p>{settingsVariants === 7 ? "brak" : settingsVariants}</p>
      </div>
      <input
        type="range"
        onChange={handleChange}
        min={2}
        max={7}
        step={1}
        value={settingsVariants}
        className="custom-slider"
      />
    </div>
  );
};

export default SelectVariants;
