import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";

const SelectVariants = () => {
  const { settingsVariants, setSettingsVariants, setSettingsMode } =
    useContext(GameContext);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setSettingsVariants(value);
    setSettingsMode({ value: "self", label: "niestandardowy" });
  };

  return (
    <div className="main-game__settings-box__variants">
      <div className="main-game__settings-box__variants-title">
        <p>Liczba wariantów odpowiedzi:</p>
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
