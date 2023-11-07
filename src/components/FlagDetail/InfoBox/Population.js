import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import PeopleIMG from "../../../img/group.svg";
import InfoComponent from "./InfoComponent";

const Population = () => {
  const { population } = useContext(FlagDetailContext);

  return (
    <>
      {population > 0 && (
        <InfoComponent
          img={PeopleIMG}
          text={
            population < 100000
              ? population < 1000
                ? `${population}`
                : `${(((population / 1000) * 10) / 10).toFixed(1)} tys. `
              : `${(((population / 1000000) * 10) / 10).toFixed(1)} mln `
          }
        />
      )}
    </>
  );
};

export default Population;
