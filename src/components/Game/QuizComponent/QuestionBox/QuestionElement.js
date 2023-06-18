import { useContext } from "react";
import { GameContext } from "../../../../contexts/GameContext";
import { useEffect } from "react";
import { useRef } from "react";
import { AppContext } from "../../../../contexts/AppContext";

import FitText from "@kennethormandy/react-fittext";

const QuestionElement = () => {
  const {
    settingsVariants,
    correctAnswer,
    selectedAnswer,
    setInputAnswer,
    inputAnswer,
    currentTime,
    setSelectedAnswer,
    polishCharsMap,
    setScore,
    score,
    setCurrentGameItemList,
    currentGameItemList,
    setCurrentItemCounter,
    currentMistakes,
    gameItemList,
    setCurrentMistakes,
    setTimerRunning,
    settingsFormat,
  } = useContext(GameContext);
  const { isGame } = useContext(AppContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [correctAnswer]);

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
          correctAnswer.name
            .toLowerCase()
            .replace(/[ąćęłńóśźż]/g, (match) => polishCharsMap[match])
        ) {
          setScore(score + 1);
          setCurrentGameItemList(
            currentGameItemList.filter(
              (flag) => flag.name !== correctAnswer.name
            )
          );
          setCurrentItemCounter(
            currentGameItemList.filter(
              (flag) => flag.name !== correctAnswer.name
            ).length
          );
        } else {
          if (currentMistakes === 1) {
            setCurrentGameItemList([...gameItemList]);
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

  if (isGame === "flag") {
    if (!(settingsVariants === 7)) {
      if (settingsFormat.value === "flagToCountry") {
        return (
          <div className="quiz__img-box">
            <img
              className="quiz__img-box__img"
              src={correctAnswer.img}
              alt="flag"
            />
          </div>
        );
      } else if (settingsFormat.value === "countryToFlag") {
        return (
          <div className="quiz__name-box">
            <FitText>{correctAnswer.name}</FitText>
          </div>
        );
      }
    } else if (settingsVariants.value === 7) {
      return (
        <div className="quiz__question-box">
          <img
            className="quiz__question-box__img"
            src={correctAnswer.img}
            alt="flag"
          />
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
        </div>
      );
    }
  } else if (isGame === "capital") {
    if (!(settingsVariants.value === 7)) {
      if (settingsFormat.value === "flagToCapital") {
        return (
          <div className="quiz__img-box">
            <img
              className="quiz__img-box__img"
              src={correctAnswer.img}
              alt="flag"
            />
          </div>
        );
      } else if (settingsFormat.value === "countryToCapital") {
        return (
          <div className="quiz__name-box">
            <FitText>{correctAnswer.name}</FitText>
          </div>
        );
      } else if (settingsFormat.value === "capitalToCountry") {
        return (
          <div className="quiz__name-box">
            {correctAnswer.capital.join(", ")}
          </div>
        );
      }
    } else if (settingsVariants.value === 7) {
      return (
        <div className="quiz__question-box">
          <img
            className="quiz__question-box__img"
            src={correctAnswer.img}
            alt="flag"
          />
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
        </div>
      );
    }
  }
};

export default QuestionElement;
