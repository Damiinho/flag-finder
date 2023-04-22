import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const SelectStripes = () => {
  const {
    verticalStripes,
    setVerticalStripes,
    horizontalStripes,
    setHorizontalStripes,
    otherShapes,
    setOtherShapes,
    symbols,
    setSymbols,
  } = useContext(AppContext);

  const setActiveVertical = () => {
    setVerticalStripes(!verticalStripes);
  };

  const setActiveHorizontal = () => {
    setHorizontalStripes(!horizontalStripes);
  };

  const setActiveOther = (item) => {
    if (item === "other-shapes") {
      setOtherShapes(!otherShapes);
    }
    if (item === "symbols") {
      setSymbols(!symbols);
    }
  };

  return (
    <div className="stripes">
      <p>kształty</p>
      <div className="stripes-buttons">
        <button
          className={`stripes vertical ${verticalStripes ? "active" : ""}`}
          onClick={setActiveVertical}
        ></button>
        <button
          className={`stripes horizontal ${horizontalStripes ? "active" : ""}`}
          onClick={setActiveHorizontal}
        ></button>
        <button
          className={`stripes other-shapes ${otherShapes ? "active" : ""}`}
          onClick={() => {
            setActiveOther("other-shapes");
          }}
        >
          <p>inne</p>
        </button>
        <button
          className={`stripes symbols ${symbols ? "active" : ""}`}
          onClick={() => {
            setActiveOther("symbols");
          }}
        >
          <p>symbole</p>
        </button>
      </div>
    </div>
  );
};

export default SelectStripes;
