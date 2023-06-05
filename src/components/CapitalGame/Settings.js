import { useContext } from "react";
import { CapitalGameContext } from "../../contexts/CapitalGameContext";

const Settings = () => {
  const { setStart } = useContext(CapitalGameContext);
  const handleClick = () => {
    setStart(true);
  };

  return (
    <div>
      <p>Ustaw ustawienia</p>
      <button onClick={handleClick}>Rozpocznij</button>
    </div>
  );
};

export default Settings;
