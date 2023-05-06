import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";

const SelectTime = () => {
  const { settingsTime, setSettingsTime } = useContext(GameContext);

  const handleChange = (e) => {
    setSettingsTime(parseInt(e.target.value));
  };

  return (
    <div className="main-game__settings-box__time">
      Limit sekund na odpowiedź: {settingsTime}
      <input
        type="range"
        onChange={handleChange}
        min={2}
        max={10}
        step={1}
        value={settingsTime}
        className="custom-slider"
      />
    </div>
  );
};

export default SelectTime;
