import { useContext, useEffect, useRef } from "react";
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
    settingsMistakes,
    currentMistakes,
    setCurrentMistakes,
  } = useContext(GameContext);

  useEffect(() => {
    setCurrentTime(settingsTime);
    setCurrentMistakes(settingsMistakes);
  }, [setCurrentTime, settingsTime, setCurrentMistakes, settingsMistakes]);

  const currentMistakesRef = useRef(currentMistakes);
  useEffect(() => {
    currentMistakesRef.current = currentMistakes;
  }, [currentMistakes]);

  useEffect(() => {
    if (currentTime > 0 && timerRunning) {
      const timer = setTimeout(() => setCurrentTime(currentTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (currentTime === 0 && currentMistakesRef.current > 0) {
      setCurrentMistakes(currentMistakesRef.current - 1);
    }
  }, [currentTime, setCurrentTime, timerRunning, setCurrentMistakes]);

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
      <div className="main-game__score-box__time">
        Pozostały czas: {currentTime}
      </div>
      {settingsMistakes > 0 && (
        <div className="main-game__score-box__mistakes">
          Liczba żyć: {currentMistakes}
        </div>
      )}
    </div>
  );
};

export default ScoreComponent;
