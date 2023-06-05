import { useContext } from "react";
import BackButton from "./CapitalGame/BackButton";
import Settings from "./CapitalGame/Settings";
import { CapitalGameContext } from "../contexts/CapitalGameContext";
import Game from "./CapitalGame/Game";

const CapitalGame = () => {
  const { start } = useContext(CapitalGameContext);
  return (
    <div>
      {!start && <Settings />}
      {!start && <BackButton />}
      {start && <Game />}
    </div>
  );
};

export default CapitalGame;
