import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import TerrainIMG from "../../../img/terrain_white_24dp.svg";
import InfoComponent from "./InfoComponent";

const Area = () => {
  const { area } = useContext(FlagDetailContext);

  return (
    <>
      {area > 0 && (
        <InfoComponent
          img={TerrainIMG}
          text={`${
            area < 1000
              ? area
              : `${(((area / 1000) * 10) / 10).toFixed(1)} tys.`
          }
            km²`}
        />
      )}
    </>
  );
};

export default Area;
