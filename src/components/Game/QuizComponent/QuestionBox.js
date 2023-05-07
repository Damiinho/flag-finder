import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../contexts/GameContext";
import AnswerButton from "./AnswerButton";

const QuestionBox = () => {
  const {
    currentFlag,
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
  } = useContext(GameContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentFlag]);

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
          quizList[0].name
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match])
        ) {
          setScore(score + 1);
        } else {
          if (currentMistakes > 0) {
            setCurrentMistakes(currentMistakes - 1);
          }
        }
      }

      setTimerRunning(false);
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
          src={currentFlag.img}
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
          {quizList.map((item, index) => (
            <AnswerButton key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
