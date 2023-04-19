import React from "react";
import "../style/SmallOne.css";

const SmallOne = (props) => {
  if (props.active) {
    return (
      <img
        className="smallitem"
        src={props.img}
        alt="flaga"
        onClick={() => props.click(props)}
      ></img>
    );
  } else return null;
};

export default SmallOne;
