import React, { useContext } from "react";
import SmallOne from "./SmallOne";
import { AppContext } from "../contexts/AppContext";

const FullList = () => {
  const {
    flags,
    regions,
    isCountrySelected,
    searchTerm,
    selectedShapes,
    selectedColors,
  } = useContext(AppContext);

  const filterFunction = () => {
    let newFlags = flags;

    if (isCountrySelected) {
      newFlags = newFlags.filter((flag) => flag.country);
    }
    if (searchTerm) {
      newFlags = newFlags.filter((flag) =>
        flag.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedColors.length > 0) {
      newFlags = newFlags.filter((flag) =>
        selectedColors.every((color) => flag.colors.includes(color))
      );
    }
    if (regions.length > 0) {
      newFlags = newFlags.filter((flag) =>
        regions.some((region) => flag.regions.includes(region.value))
      );
    }
    if (selectedShapes.length > 0) {
      newFlags = newFlags.filter((flag) =>
        selectedShapes.every((shape) => flag.shapes.includes(shape))
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
