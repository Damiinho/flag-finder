import { useContext } from "react";
import InfoComponent from "./InfoComponent";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import WaterIMG from "../../../img/water_white_24dp.svg";
import CheckIMG from "../../../img/check_circle_white_24dp.svg";
import CancelIMG from "../../../img/cancel_white_24dp.svg";
import UNImg from "../../../img/UNlogo.svg";

const UNMember = () => {
  const { UNMember } = useContext(FlagDetailContext);

  return (
    <InfoComponent
      img={UNImg}
      text={
        UNMember ? (
          <img src={CheckIMG} alt="" />
        ) : (
          <img src={CancelIMG} alt="" />
        )
      }
    />
  );
};
export default UNMember;
