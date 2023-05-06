import { useContext, useEffect } from "react";
import { GameContext } from "../../../contexts/GameContext";

const ScoreComponent = () => {
  const {
    score,
    bestScore,
    lastScore,
    currentTime,
    setCurrentTime,
    settingsTime,
    timerRunning,
  } = useContext(GameContext);

  useEffect(() => {
    setCurrentTime(settingsTime);
  }, [setCurrentTime, settingsTime]);

  useEffect(() => {
    if (currentTime > 0 && timerRunning) {
      const timer = setTimeout(() => setCurrentTime(currentTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentTime, setCurrentTime, timerRunning]);

  return (
    <div className="main-game__score-box">
      <div className="main-game__score-box__current">
        <p>wynik:</p>
        <p>{score}</p>
      </div>
      {bestScore || lastScore ? (
        <div className="main-game__score-box__second">
          {bestScore > 0 && (
            <div className="main-game__score-box__best-score">
              najlepszy: {bestScore}
            </div>
          )}
          {lastScore !== null && (
            <div className="main-game__score-box__last-score">
              ostatni: {lastScore}
            </div>
          )}
        </div>
      ) : null}
      <div className="main-game__score-box__last-score">
        Pozostały czas: {currentTime}
      </div>
    </div>
  );
};

export default ScoreComponent;
