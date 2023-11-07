import { useContext } from "react";
import InfoComponent from "./InfoComponent";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import WaterIMG from "../../../img/water_white_24dp.svg";
import CheckIMG from "../../../img/check_circle_white_24dp.svg";
import CancelIMG from "../../../img/cancel_white_24dp.svg";

const Landlocked = () => {
  const { landlocked } = useContext(FlagDetailContext);

  if (!(landlocked === "brak danych")) {
    return (
      <InfoComponent
        img={WaterIMG}
        text={
          landlocked ? (
            <img src={CancelIMG} alt="" />
          ) : (
            <img src={CheckIMG} alt="" />
          )
        }
      />
    );
  }
};

export default Landlocked;
