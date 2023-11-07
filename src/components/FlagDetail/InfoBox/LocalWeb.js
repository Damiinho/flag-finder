import WebIMG from "../../../img/language_white_24dp.svg";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import { useContext } from "react";
import InfoComponent from "./InfoComponent";
const LocalWeb = () => {
  const { tld } = useContext(FlagDetailContext);

  if (tld) {
    return <InfoComponent img={WebIMG} text={tld[0]} fontSize={15} />;
  }
};
export default LocalWeb;
