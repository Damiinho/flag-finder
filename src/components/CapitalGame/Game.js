import { useContext } from "react";
import { CapitalGameContext } from "../../contexts/CapitalGameContext";
import QuestionBox from "./QuestionBox";

const Game = () => {
  const { setStart } = useContext(CapitalGameContext);

  const handleClick = () => {
    setStart(false);
  };
  return (
    <div>
      <QuestionBox />
      <button onClick={handleClick}>powrót</button>
    </div>
  );
};

export default Game;
