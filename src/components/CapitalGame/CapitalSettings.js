import { useContext } from "react";
import { CapitalGameContext } from "../../contexts/CapitalGameContext";
import SettingsRegions from "./CapitalSettings/SettingsRegions";

const Settings = () => {
  const { setStart } = useContext(CapitalGameContext);
  const handleClick = () => {
    setStart(true);
  };

  return (
    <div>
      <p>Ustaw ustawienia</p>
      <SettingsRegions />

      <button onClick={handleClick}>Rozpocznij</button>
    </div>
  );
};

export default Settings;
