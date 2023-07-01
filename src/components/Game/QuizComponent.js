import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import ScoreComponent from "./QuizComponent/ScoreComponent";
import QuestionBox from "./QuizComponent/QuestionBox";
import LoadingBox from "./QuizComponent/LoadingBox";
import { AppContext } from "../../contexts/AppContext";
import ExitIMG from "../../img/exit.svg";

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
    settingsVariants,
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

  const AfterResponse = () => {
    if (selectedAnswer) {
      if (isGame === "flag" || isGame === "capital") {
        if (
          // -------------------- correct
          ((isGame === "flag" ||
            (isGame === "capital" && settingsVariants < 7)) &&
            selectedAnswer
              .toLowerCase()
              .replace(
                /[ąåãćçęéíłńñóśźżʻ]/g,
                (match) => polishCharsMap[match]
              ) ===
              correctAnswer.name
                .toLowerCase()
                .replace(
                  /[ąåãćçęéíłńñóśźżʻ]/g,
                  (match) => polishCharsMap[match]
                )) ||
          (isGame === "capital" &&
            (selectedAnswer
              .toLowerCase()
              .replace(
                /[ąåãćçęéíłńñóśźżʻ]/g,
                (match) => polishCharsMap[match]
              ) ===
              correctAnswer.capital
                .join(", ")
                .toLowerCase()
                .replace(
                  /[ąåãćçęéíłńñóśźżʻ]/g,
                  (match) => polishCharsMap[match]
                ) ||
              correctAnswer.capital.some(
                (capital) =>
                  selectedAnswer
                    .toLowerCase()
                    .replace(
                      /[ąåãćçęéíłńñóśźżʻ]/g,
                      (match) => polishCharsMap[match]
                    ) ===
                  capital
                    .toLowerCase()
                    .replace(
                      /[ąåãćçęéíłńñóśźżʻ]/g,
                      (match) => polishCharsMap[match]
                    )
              )))
        ) {
          if (!isEmpty) {
            // -------------------- correct & !isEmpty
            return (
              <>
                <HandleButton click={handleNext} name="Dalej" />
                <ResultBox result="good" name="DOBRZE" />
              </>
            );
          } else if (isEmpty) {
            // -------------------- correct & isEmpty
            <>
              <HandleButton click={handleRestart} name="Od nowa" />
              <ResultBox result="good" name="Koniec" />
            </>;
          }
        }
        // -------------------- incorrect
        else {
          if (currentMistakes > 0) {
            // -------------------- incorrect & alive
            return (
              <>
                <HandleButton click={handleNext} name="Dalej" />
                <CorrectAnswer />
                <ResultBox result="bad" name="BŁĄD" />
              </>
            );
          } else if (currentMistakes === 0) {
            // -------------------- incorrect & dead
            return (
              <>
                <HandleButton click={handleRestart} name="Od nowa" />
                <CorrectAnswer />
                <ResultBox result="bad" name="Koniec" />
              </>
            );
          }
        }
      }
    } else if (currentTime === 0) {
      // -------------------- end time
      if (currentMistakes > 0) {
        // -------------------- end time & alive
        return (
          <>
            <HandleButton click={handleNext} name="Dalej" />
            <CorrectAnswer />
            <ResultBox result="bad" name="CZAS MINĄŁ" />
          </>
        );
      } else if (currentMistakes === 0) {
        // -------------------- end time & dead
        return (
          <>
            <HandleButton click={handleRestart} name="Od nowa" />
            <CorrectAnswer />
            <ResultBox result="bad" name="Koniec" />
          </>
        );
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
          <QuestionBox />
          <AfterResponse />

          <button
            className="main-game__stop-button"
            onClick={() => handleStartStop(false)}
          >
            <img src={ExitIMG} alt="exit" />
          </button>
        </>
      )}
    </>
  );
};

export default QuizComponent;
