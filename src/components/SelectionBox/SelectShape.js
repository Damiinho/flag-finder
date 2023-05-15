import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

import CrossIMG from "../../img/cross.svg";
import TriangleIMG from "../../img/triangle.svg";
import CircleIMG from "../../img/circle.svg";
import EmblemIMG from "../../img/emblem.svg";
import WordIMG from "../../img/word.svg";
import SunIMG from "../../img/sun.svg";
import MoonIMG from "../../img/moon.svg";
import StarIMG from "../../img/star.svg";
import PlantIMG from "../../img/plant.svg";
import AnimalIMG from "../../img/animal.svg";
import WeaponIMG from "../../img/weapon.svg";
import ContoursIMG from "../../img/contours.svg";
import BuildingIMG from "../../img/building.svg";
import ArrowDownImg from "../../img/arrow-down-icon.svg";

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
        title={props.title}
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
        <ButtonShape shape="vertical" title="paski poziome" />
        <ButtonShape shape="horizontal" title="paski pionowe" />
        <ButtonShape shape="diagonal" title="paski poprzeczne" />
      </div>
      <div
        className={`selectors__shapes__button-box second ${
          isShow ? "active" : "inactive"
        }`}
      >
        <ButtonShape shape="cross" img={CrossIMG} title="krzyż" />
        <ButtonShape shape="triangle" img={TriangleIMG} title="trójkąt" />
        <ButtonShape shape="circle" img={CircleIMG} title="koło" />
        <ButtonShape shape="emblem" img={EmblemIMG} title="herb" />
        <ButtonShape shape="word" img={WordIMG} title="słowa" />
        <ButtonShape shape="sun" img={SunIMG} title="słońce" />
        <ButtonShape shape="moon" img={MoonIMG} title="księżyc" />
        <ButtonShape shape="star" img={StarIMG} title="gwiazda" />
        <ButtonShape shape="plant" img={PlantIMG} title="roślina" />
        <ButtonShape shape="animal" img={AnimalIMG} title="zwierzę" />
        <ButtonShape shape="weapon" img={WeaponIMG} title="broń" />
        <ButtonShape shape="contours" img={ContoursIMG} title="kontury kraju" />
        <ButtonShape shape="building" img={BuildingIMG} title="budynki" />
        <ButtonShape shape="other" content="inne" title="inne" />
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
