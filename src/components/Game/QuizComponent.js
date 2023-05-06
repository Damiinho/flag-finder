import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import ScoreComponent from "./QuizComponent/ScoreComponent";
import QuestionBox from "./QuizComponent/QuestionBox";
import LoadingBox from "./QuizComponent/LoadingBox";

const QuizComponent = () => {
  const {
    currentFlag,
    handleStartStop,
    selectedAnswer,
    setSelectedAnswer,
    generateQuizList,
    setLastScore,
    score,
    bestScore,
    setBestScore,
    setScore,
    settingsTime,
    setCurrentTime,
    currentTime,
    setTimerRunning,
  } = useContext(GameContext);
  const [isQuizLoading, setIsQuizLoading] = useState(true);

  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setCurrentTime(settingsTime);
    setTimerRunning(true);
  };
  const handleRestart = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setLastScore(score);
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setIsQuizLoading(true);
    setTimeout(() => {
      setIsQuizLoading(false);
    }, 3000);
    setTimerRunning(true);
  };

  const HandleButton = (props) => (
    <div className="main-game__handle-box">
      <button onClick={props.click}>{props.name}</button>
    </div>
  );

  const ResultBox = (props) => (
    <div className={`main-game__result ${props.result}`}>{props.name}</div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuizLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isQuizLoading ? (
        <LoadingBox />
      ) : (
        <>
          <ScoreComponent />
          {selectedAnswer === currentFlag.name && (
            <>
              <HandleButton click={handleNext} name="Następna flaga" />
              <ResultBox result="good" name="DOBRZE" />
            </>
          )}
          {selectedAnswer && selectedAnswer !== currentFlag.name && (
            <>
              <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
              <ResultBox result="bad" name="BŁĄD" />
            </>
          )}
          {currentTime === 0 && (
            <>
              <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
              <ResultBox result="bad" name="CZAS MINĄŁ" />
            </>
          )}
          <QuestionBox />
          <button
            className="main-game__stop-button"
            onClick={() => handleStartStop(false)}
          >
            Przerwij
          </button>
        </>
      )}
    </>
  );
};

export default QuizComponent;
