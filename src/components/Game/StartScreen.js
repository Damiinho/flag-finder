import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const StartScreen = () => {
  const { handleStartStop } = useContext(GameContext);
  return (
    <button
      className="main-game__start-button"
      onClick={() => handleStartStop(true)}
    >
      Rozpocznij
    </button>
  );
};

export default StartScreen;
