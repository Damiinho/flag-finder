import React from "react";
import defaultFlag from "../img/defaultFlag.png";

const Load = () => {
  return (
    <div className="load">
      <div className="load-box">
        <p>Nie wiesz, czyja to flaga?</p>
        <p>Znajdź ją</p>
        <img src={defaultFlag} alt="" />
      </div>
    </div>
  );
};

export default Load;
