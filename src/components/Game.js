import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import QuizComponent from "./Game/QuizComponent";
import StartScreen from "./Game/StartScreen";

const Game = () => {
  const { start } = useContext(GameContext);

  return (
    <div className="main-game">
      {!start && <StartScreen />}
      {start && <QuizComponent />}
    </div>
  );
};

export default Game;
