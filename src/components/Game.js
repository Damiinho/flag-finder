import { useState } from "react";

const Game = () => {
  const [start, isStart] = useState(false);
  const handleStartStop = (value) => {
    isStart(value);
  };

  return (
    <div className="main-game">
      {start ? null : (
        <button onClick={() => handleStartStop(true)}>Rozpocznij</button>
      )}
      {start ? (
        <button onClick={() => handleStartStop(false)}>Zatrzymaj</button>
      ) : null}
    </div>
  );
};

export default Game;
