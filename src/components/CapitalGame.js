import { useContext } from "react";
import BackButton from "./CapitalGame/BackButton";
import CapitalSettings from "./CapitalGame/CapitalSettings";
import { CapitalGameContext } from "../contexts/CapitalGameContext";
import Game from "./CapitalGame/Game";

const CapitalGame = () => {
  const { start } = useContext(CapitalGameContext);
  return (
    <div>
      {!start && <CapitalSettings />}
      {!start && <BackButton />}
      {start && <Game />}
    </div>
  );
};

export default CapitalGame;
