import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../contexts/GameContext";
import AnswerButton from "./AnswerButton";

const QuestionBox = () => {
  const {
    correctFlag,
    quizList,
    settingsVariants,
    selectedAnswer,
    setSelectedAnswer,
    inputAnswer,
    setInputAnswer,
    setScore,
    score,
    currentMistakes,
    setCurrentMistakes,
    currentTime,
    setTimerRunning,
    polishCharsMap,
    setCurrentGameFlagList,
    currentGameFlagList,
    gameFlagList,
    setCurrentFlagCounter,
  } = useContext(GameContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [correctFlag]);

  const handleInputChange = (e) => {
    if (!selectedAnswer) {
      setInputAnswer(e.target.value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (currentTime !== 0) {
      if (!selectedAnswer && inputAnswer) {
        setSelectedAnswer(inputAnswer);
        if (
          inputAnswer
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match]) ===
          correctFlag.name
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match])
        ) {
          setScore(score + 1);
          setCurrentGameFlagList(
            currentGameFlagList.filter((flag) => flag.name !== correctFlag.name)
          );
          setCurrentFlagCounter(
            currentGameFlagList.filter((flag) => flag.name !== correctFlag.name)
              .length
          );
        } else {
          if (currentMistakes === 1) {
            setCurrentGameFlagList([...gameFlagList]);
          }
          setCurrentMistakes(currentMistakes - 1);
        }
      }

      if (inputAnswer !== "") {
        setTimerRunning(false);
      }
    }
    if (document.querySelector(".main-game__handle-box button")) {
      document.querySelector(".main-game__handle-box button").click();
    }
  };

  return (
    <div className="main-game__quiz">
      <div
        className={`${
          settingsVariants === 7 ? "quiz__question-box" : "quiz__img-box"
        }`}
      >
        <img
          className={`${
            settingsVariants === 7
              ? "quiz__question-box__img"
              : "quiz__img-box__img"
          }`}
          src={correctFlag.img}
          alt="flag"
        />
        {settingsVariants === 7 && (
          <div className="quiz__question-box__answers">
            <form onSubmit={handleInputSubmit}>
              <input
                type="text"
                onChange={handleInputChange}
                value={inputAnswer}
                ref={inputRef}
              />
            </form>
          </div>
        )}
      </div>
      {settingsVariants !== 7 && (
        <div className="quiz__answers">
          {quizList.map((item, index) => {
            return <AnswerButton key={index} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
