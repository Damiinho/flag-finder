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
    currentMistakes,
    setInputAnswer,
    polishCharsMap,
  } = useContext(GameContext);
  const [isQuizLoading, setIsQuizLoading] = useState(true);

  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setCurrentTime(settingsTime);
    setTimerRunning(true);
    setInputAnswer("");
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
    setCurrentTime(settingsTime);
    setInputAnswer("");
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
          {selectedAnswer &&
            selectedAnswer
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) ===
              currentFlag.name
                .toLowerCase()
                .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) && (
              <>
                <HandleButton click={handleNext} name="Następna flaga" />
                <ResultBox result="good" name="DOBRZE" />
              </>
            )}
          {selectedAnswer &&
            selectedAnswer
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
              currentFlag.name
                .toLowerCase()
                .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) && (
              <>
                <ResultBox result="bad" name="BŁĄD" />
              </>
            )}
          {selectedAnswer &&
            selectedAnswer
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
              currentFlag.name
                .toLowerCase()
                .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) &&
            currentMistakes === 0 && (
              <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
            )}
          {selectedAnswer &&
            selectedAnswer
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
              currentFlag.name
                .toLowerCase()
                .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) &&
            currentMistakes > 0 && (
              <HandleButton click={handleNext} name="Następna flaga" />
            )}
          {currentTime === 0 && (
            <>
              <ResultBox result="bad" name="CZAS MINĄŁ" />
            </>
          )}
          {currentTime === 0 && currentMistakes === 0 && (
            <>
              <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
            </>
          )}
          {currentTime === 0 && currentMistakes > 0 && (
            <>
              <HandleButton click={handleNext} name="Następna flaga" />
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
