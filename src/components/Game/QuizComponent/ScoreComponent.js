import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../../contexts/GameContext";
import miniFlagIMG from "../../../img/miniFlag.svg";

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
  const [progressBar, setProgressBar] = useState(100);

  useEffect(() => {
    setCurrentMistakes(settingsMistakes);
  }, [setCurrentTime, settingsTime, setCurrentMistakes, settingsMistakes]);

  const currentMistakesRef = useRef(currentMistakes);
  useEffect(() => {
    currentMistakesRef.current = currentMistakes;
  }, [currentMistakes]);

  useEffect(() => {
    if (currentTime > 0 && timerRunning) {
      const timer = setTimeout(() => {
        const newTime = Number((currentTime - 0.1).toFixed(1));
        setCurrentTime(newTime);
        setProgressBar(Math.round((newTime / settingsTime) * 100));
      }, 100);
      return () => clearTimeout(timer);
    } else if (currentTime === 0 && currentMistakesRef.current > 0) {
      setCurrentMistakes(currentMistakesRef.current - 1);
    }
  }, [currentTime, setCurrentTime, timerRunning, setCurrentMistakes]);

  const mistakesFlags = () => {
    const greenFlags = currentMistakes;
    const redFlags = settingsMistakes - currentMistakes;

    const flags = [];
    for (let i = 0; i < greenFlags; i++) {
      flags.push(
        <img
          className="green"
          src={miniFlagIMG}
          alt="flag"
          key={`green-${i}`}
        />
      );
    }
    for (let i = 0; i < redFlags; i++) {
      flags.push(
        <img className="red" src={miniFlagIMG} alt="flag" key={`red-${i}`} />
      );
    }
    return flags;
  };

  return (
    <>
      <div className="main-game__score-box">
        <div className="main-game__score-box__current">
          <p>wynik:</p>
          <p>{score}</p>
        </div>
        {bestScore || lastScore ? (
          <div className="main-game__score-box__lastbest">
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

        {settingsMistakes > 0 && (
          <div className="main-game__score-box__mistakes">
            <p>liczba żyć:</p>
            <div className="main-game__score-box__mistakes-flags">
              {mistakesFlags()}
            </div>
          </div>
        )}
        <div className="main-game__score-box__time">
          <div className="main-game__score-box__time-box">
            <div className="main-game__score-box__time-box__value">
              {currentTime} s
            </div>
            <div
              className="main-game__score-box__time-box__progress"
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreComponent;
