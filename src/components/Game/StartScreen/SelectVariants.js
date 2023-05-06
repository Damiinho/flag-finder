import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";

const SelectVariants = () => {
  const { settingsVariants, setSettingsVariants } = useContext(GameContext);

  const handleChange = (e) => {
    setSettingsVariants(parseInt(e.target.value));
  };

  return (
    <div className="main-game__settings-box__variants">
      Wybierz liczbę wariantów odpowiedzi: {settingsVariants}
      <input
        type="range"
        onChange={handleChange}
        min={2}
        max={6}
        step={1}
        value={settingsVariants}
        className="custom-slider"
      />
    </div>
  );
};

export default SelectVariants;
