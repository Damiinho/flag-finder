import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";

const SelectMistakes = () => {
  const { settingsMistakes, setSettingsMistakes } = useContext(GameContext);

  const handleChange = (e) => {
    setSettingsMistakes(parseInt(e.target.value));
  };

  return (
    <div className="main-game__settings-box__mistakes">
      Liczba dopuszczalnych błędów: {settingsMistakes}
      <input
        type="range"
        onChange={handleChange}
        min={0}
        max={5}
        step={1}
        value={settingsMistakes}
        className="custom-slider"
      />
    </div>
  );
};

export default SelectMistakes;
