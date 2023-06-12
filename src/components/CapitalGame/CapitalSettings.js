import { useContext } from "react";
import { CapitalGameContext } from "../../contexts/CapitalGameContext";
import SelectRegions from "./CapitalSettings/SelectRegions";
import SelectVariants from "./CapitalSettings/SelectVariants";

const Settings = () => {
  const { setStart } = useContext(CapitalGameContext);
  const handleClick = () => {
    setStart(true);
  };

  return (
    <div>
      <p>Ustaw ustawienia</p>
      <SelectRegions />
      <SelectVariants />

      <button onClick={handleClick}>Rozpocznij</button>
    </div>
  );
};

export default Settings;
