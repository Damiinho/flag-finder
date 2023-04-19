import React, { useContext } from "react";
import SmallOne from "./SmallOne";
import { AppContext } from "../contexts/AppContext";

const FullList = () => {
  const {
    flags,
    verticalStripes,
    horizontalStripes,
    otherShapes,
    symbols,
    region,
    isCountrySelected,
    red,
    white,
    black,
    yellow,
    blue,
    green,
    orange,
  } = useContext(AppContext);

  const filterFunction = () => {
    let newFlags = flags;

    if (horizontalStripes) {
      newFlags = newFlags.filter((flag) => flag.horizontalStripes);
    }
    if (verticalStripes) {
      newFlags = newFlags.filter((flag) => flag.verticalStripes);
    }
    if (otherShapes) {
      newFlags = newFlags.filter((flag) => flag.otherShapes);
    }
    if (symbols) {
      newFlags = newFlags.filter((flag) => flag.symbols);
    }
    if (region) {
      newFlags = newFlags.filter((flag) => flag.region === region);
    }
    if (isCountrySelected) {
      newFlags = newFlags.filter((flag) => flag.country);
    }
    if (red) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("red"));
    }
    if (white) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("white"));
    }
    if (black) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("black"));
    }
    if (yellow) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("yellow"));
    }
    if (blue) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("blue"));
    }
    if (green) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("green"));
    }
    if (orange) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("orange"));
    }
    return newFlags;
  };

  const countries = filterFunction();

  const handleList = () => {
    const listShowCountries = countries.map((item) => (
      <SmallOne key={item.id} item={item} />
    ));

    return listShowCountries;
  };

  return <>{handleList()}</>;
};

export default FullList;
