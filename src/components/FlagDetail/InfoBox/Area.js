import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";

const Area = () => {
  const { area } = useContext(FlagDetailContext);

  return (
    <>
      {area > 0 ? (
        <div className="App__flag-detail__area">
          <p>
            powierzchnia:{" "}
            {area < 1000
              ? area
              : `${(((area / 1000) * 10) / 10).toFixed(1)} tys.`}{" "}
            km²
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Area;
