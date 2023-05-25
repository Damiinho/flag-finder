import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import PopulationIMG from "../../../img/population.svg";

const Population = () => {
  const { population } = useContext(FlagDetailContext);

  return (
    <>
      {population > 0 ? (
        <div className="App__flag-detail__population">
          <img src={PopulationIMG} alt="population" />
          <p>
            ludność:{" "}
            {population < 100000
              ? population < 1000
                ? `${population}`
                : `${(((population / 1000) * 10) / 10).toFixed(1)} tys. `
              : `${(((population / 1000000) * 10) / 10).toFixed(1)} mln `}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Population;
