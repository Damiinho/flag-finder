import React, { useContext } from "react";
import "../style/SmallOne.css";
import { AppContext } from "../contexts/AppContext";

const SmallOne = (props) => {
  const { setSelectedSmallOne } = useContext(AppContext);

  const handleClick = (item) => {
    setSelectedSmallOne(item);
  };
  if (props.item.active) {
    return (
      <img
        className="smallitem"
        src={props.item.img}
        alt="flaga"
        onClick={() => handleClick(props.item)}
      ></img>
    );
  } else return null;
};

export default SmallOne;
