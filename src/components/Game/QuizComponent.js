import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import ScoreComponent from "./QuizComponent/ScoreComponent";
import QuestionBox from "./QuizComponent/QuestionBox";
import LoadingBox from "./QuizComponent/LoadingBox";
import { AppContext } from "../../contexts/AppContext";

const QuizComponent = () => {
  const {
    correctAnswer,
    handleStartStop,
    selectedAnswer,
    setSelectedAnswer,
    generateQuizList,
    settingsTime,
    setCurrentTime,
    currentTime,
    setTimerRunning,
    currentMistakes,
    setInputAnswer,
    polishCharsMap,
    setCurrentGameItemList,
    currentGameItemList,
    gameItemList,
    isEmpty,
    setIsEmpty,
    setCurrentItemCounter,
    settingsFormat,
  } = useContext(GameContext);
  const { isGame } = useContext(AppContext);
  const [isQuizLoading, setIsQuizLoading] = useState(true);

  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setCurrentTime(settingsTime);
    setTimerRunning(true);
    setInputAnswer("");
  };
  const handleRestart = () => {
    handleStartStop(true);
    setIsEmpty(false);
    setCurrentItemCounter(gameItemList.length);
    setIsQuizLoading(true);
    setTimeout(() => {
      setIsQuizLoading(false);
    }, 3000);
  };

  const HandleButton = (props) => (
    <div className="main-game__handle-box">
      <button onClick={props.click}>{props.name}</button>
    </div>
  );

  const ResultBox = (props) => (
    <div className={`main-game__result ${props.result}`}>{props.name}</div>
  );

  const CorrectAnswer = () => {
    if (isGame === "flag" && settingsFormat.value === "flagToCountry") {
      return (
        <div className={`main-game__result correct`}>{correctAnswer.name}</div>
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuizLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentGameItemList.length === 0) {
      setIsEmpty(true);
      setCurrentGameItemList([...gameItemList]);
    }
  }, [currentGameItemList, setCurrentGameItemList, gameItemList, setIsEmpty]);

  const Empty = () => {
    if (isEmpty) {
      return (
        <>
          <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
          <ResultBox result="bad" name="Koniec" />
        </>
      );
    }
  };

  const Result = () => {
    if (currentTime === 0) {
      return <ResultBox result="bad" name="CZAS MINĄŁ" />;
    } else if (isGame === "flag") {
      if (selectedAnswer) {
        if (
          selectedAnswer
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) ===
            correctAnswer.name
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) &&
          !isEmpty
        ) {
          return (
            <>
              <HandleButton click={handleNext} name="Następna flaga" />
              <ResultBox result="good" name="DOBRZE" />
            </>
          );
        } else if (
          selectedAnswer
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
          correctAnswer.name
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match])
        )
          return (
            <>
              <CorrectAnswer />
              <ResultBox result="bad" name="BŁĄD" />
            </>
          );
        else if (
          selectedAnswer
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
            correctAnswer.name
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) &&
          currentMistakes === 0
        ) {
          return (
            <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
          );
        } else if (
          selectedAnswer
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) !==
            correctAnswer.name
              .toLowerCase()
              .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) &&
          currentMistakes > 0 &&
          !isEmpty
        ) {
          <HandleButton click={handleNext} name="Następna flaga" />;
        }
      }
    }
  };

  return (
    <>
      {isQuizLoading ? (
        <LoadingBox />
      ) : (
        <>
          <ScoreComponent />
          <Empty />
          <Result />

          {currentTime === 0 && (
            <>
              <CorrectAnswer />
            </>
          )}

          {currentTime === 0 && currentMistakes === 0 && (
            <>
              <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
            </>
          )}
          {currentTime === 0 && currentMistakes > 0 && !isEmpty && (
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
