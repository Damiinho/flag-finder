import React, { useContext } from "react";
import "../style/SelectStripes.css";
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
      <button
        className={`stripes vertical ${verticalStripes ? "active" : ""}`}
        onClick={setActiveVertical}
      >
        paski pionowe
      </button>
      <button
        className={`stripes horizontal ${horizontalStripes ? "active" : ""}`}
        onClick={setActiveHorizontal}
      >
        paski poziome
      </button>
      <button
        className={`stripes other-shapes ${otherShapes ? "active" : ""}`}
        onClick={() => {
          setActiveOther("other-shapes");
        }}
      >
        Inne kształty
      </button>
      <button
        className={`stripes symbols ${symbols ? "active" : ""}`}
        onClick={() => {
          setActiveOther("symbols");
        }}
      >
        Symbole
      </button>
    </div>
  );
};

export default SelectStripes;
