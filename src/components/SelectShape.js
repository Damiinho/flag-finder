import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

import CrossIMG from "../img/cross.svg";
import TriangleIMG from "../img/triangle.png";
import CircleIMG from "../img/circle.svg";
import EmblemIMG from "../img/emblem.svg";
import WordIMG from "../img/word.svg";
import SunIMG from "../img/sun.svg";
import MoonIMG from "../img/moon.svg";
import StarIMG from "../img/star.svg";
import PlantIMG from "../img/plant.svg";
import AnimalIMG from "../img/animal.svg";
import WeaponIMG from "../img/weapon.svg";
// import ContoursIMG from "../img/contours.svg";
import ContoursIMG from "../img/country3.png";
import BuildingIMG from "../img/building.svg";
import ArrowDownImg from "../img/arrow-down-icon.svg";

const SelectShape = () => {
  const { selectedShapes, setSelectedShapes } = useContext(AppContext);
  const [isShow, setIsShow] = useState(false);

  const handleClick = (shape) => {
    if (!selectedShapes.includes(shape)) {
      setSelectedShapes((prevSelectedShapes) => [...prevSelectedShapes, shape]);
    } else {
      setSelectedShapes((prevSelectedShapes) =>
        prevSelectedShapes.filter((selectedShape) => selectedShape !== shape)
      );
    }
  };
  const ButtonShape = (props) => {
    return (
      <button
        onClick={() => handleClick(props.shape)}
        className={`shape ${props.shape} ${
          selectedShapes.includes(props.shape) ? "active" : ""
        }`}
      >
        {props.content ? props.content : null}
        {props.img ? <img src={props.img} alt={props.shape} /> : null}
      </button>
    );
  };

  const handleShowHide = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="selectors__shapes">
      <p className="selectors__shapes-description">wybierz kształty</p>
      <div className="selectors__shapes__button-box">
        <ButtonShape shape="vertical" />
        <ButtonShape shape="horizontal" />
        <ButtonShape shape="diagonal" />
      </div>
      <div
        className={`selectors__shapes__button-box second ${
          isShow ? "active" : "inactive"
        }`}
      >
        <ButtonShape shape="cross" img={CrossIMG} />
        <ButtonShape shape="triangle" img={TriangleIMG} />
        <ButtonShape shape="circle" img={CircleIMG} />
        <ButtonShape shape="emblem" img={EmblemIMG} />
        <ButtonShape shape="word" img={WordIMG} />
        <ButtonShape shape="sun" img={SunIMG} />
        <ButtonShape shape="moon" img={MoonIMG} />
        <ButtonShape shape="star" img={StarIMG} />
        <ButtonShape shape="plant" img={PlantIMG} />
        <ButtonShape shape="animal" img={AnimalIMG} />
        <ButtonShape shape="weapon" img={WeaponIMG} />
        <ButtonShape shape="contours" img={ContoursIMG} />
        <ButtonShape shape="building" img={BuildingIMG} />
        <ButtonShape shape="other" content="inne" />
      </div>
      <div
        className={`selectors__shapes__showhide ${isShow ? "show" : "hide"}`}
        onClick={handleShowHide}
      >
        <>
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "26px",
              left: "7px",
            }}
          />
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "6px",
              left: "7px",
            }}
          />
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "-14px",
              left: "7px",
            }}
          />
          {isShow ? "mniej kształtów" : "więcej kształtów"}
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "26px",
              right: "7px",
            }}
          />
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "6px",
              right: "7px",
            }}
          />
          <img
            src={ArrowDownImg}
            alt="arrow"
            style={{
              top: "-14px",
              right: "7px",
            }}
          />
        </>
      </div>
    </div>
  );
};

export default SelectShape;
