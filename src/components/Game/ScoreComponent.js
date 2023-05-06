import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const ScoreComponent = () => {
  const { score, bestScore, lastScore } = useContext(GameContext);

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
    </div>
  );
};

export default ScoreComponent;
