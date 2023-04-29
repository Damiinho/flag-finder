import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import checkmarkIMG from "../img/checkmark.png";
import checkmarkBlackIMG from "../img/checkmarkBlack.png";

const SelectColor = () => {
  const { selectedColors, setSelectedColors } = useContext(AppContext);

  const handleClick = (props) => {
    if (!selectedColors.includes(props.color)) {
      setSelectedColors((prevSelectedColors) => [
        ...prevSelectedColors,
        props.color,
      ]);
    } else {
      setSelectedColors((prevSelectedColors) =>
        prevSelectedColors.filter(
          (selectedColors) => selectedColors !== props.color
        )
      );
    }
  };

  const ButtonColor = (props) => {
    return (
      <button
        className={`color ${props.color} ${
          selectedColors.includes(props.color) ? "active" : ""
        }`}
        onClick={() => handleClick(props)}
      >
        <img src={props.img} alt="checkmark" />
      </button>
    );
  };

  return (
    <div className="selectors__colors">
      <p className="selectors__colors-description">wybierz kolory</p>
      <div className="selectors__colors__button-box">
        <ButtonColor color="white" img={checkmarkBlackIMG} />
        <ButtonColor color="black" img={checkmarkIMG} />
        <ButtonColor color="orange" img={checkmarkIMG} />
        <ButtonColor color="red" img={checkmarkIMG} />
        <ButtonColor color="claret" img={checkmarkIMG} />
        <ButtonColor color="yellow" img={checkmarkBlackIMG} />
        <ButtonColor color="blue" img={checkmarkIMG} />
        <ButtonColor color="navyblue" img={checkmarkIMG} />
        <ButtonColor color="green" img={checkmarkIMG} />
      </div>
    </div>
  );
};

export default SelectColor;
