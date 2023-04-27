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
    regions,
    isCountrySelected,
    red,
    claret,
    white,
    black,
    yellow,
    blue,
    navyBlue,
    green,
    orange,
    searchTerm,
    // selectedColors,
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
    if (isCountrySelected) {
      newFlags = newFlags.filter((flag) => flag.country);
    }
    if (red) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("red"));
    }
    if (claret) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("claret"));
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
    if (navyBlue) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("navyblue"));
    }
    if (green) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("green"));
    }
    if (orange) {
      newFlags = newFlags.filter((flag) => flag.colors.includes("orange"));
    }
    if (searchTerm) {
      newFlags = newFlags.filter((flag) =>
        flag.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // if (selectedColors.length > 0) {
    //   newFlags = newFlags.filter((flag) =>
    //     selectedColors.every((color) => flag.colors.includes(color.value))
    //   );
    // }
    if (regions.length > 0) {
      newFlags = newFlags.filter((flag) =>
        regions.some((region) => flag.regions.includes(region.value))
      );
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
