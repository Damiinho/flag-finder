import { useContext } from "react";
import { CapitalGameContext } from "../../contexts/CapitalGameContext";

const Game = () => {
  const { setStart } = useContext(CapitalGameContext);

  const handleClick = () => {
    setStart(false);
  };
  return (
    <div>
      <p>to jest gra</p>
      <button onClick={handleClick}>powrót</button>
    </div>
  );
};

export default Game;
