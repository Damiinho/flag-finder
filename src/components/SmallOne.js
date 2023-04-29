import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const SmallOne = (props) => {
  const { selectedSmallOne, setSelectedSmallOne } = useContext(AppContext);
  const [over, setOver] = useState(false);

  const handleMouseChange = (value) => {
    setOver(value);
  };

  const handleClick = (item) => {
    if (item !== selectedSmallOne) {
      setSelectedSmallOne(item);
    } else setSelectedSmallOne(null);
  };
  if (props.item.active) {
    return (
      <img
        className={`smallitem ${
          selectedSmallOne && selectedSmallOne.id === props.item.id
            ? "active"
            : ""
        }`}
        style={over ? { transform: "scale(1.3)", zIndex: 1 } : null}
        src={props.item.img}
        alt="flaga"
        onClick={() => handleClick(props.item)}
        onMouseOver={() => handleMouseChange(true)}
        onMouseOut={() => handleMouseChange(false)}
      ></img>
    );
  } else return null;
};

export default SmallOne;
