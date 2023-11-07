import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import FitText from "@kennethormandy/react-fittext";
import Capital from "./Capital";

const NameSection = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { officialName, region } = useContext(FlagDetailContext);

  return (
    <>
      <div className="App__flag-detail__name">
        <FitText maxFontSize={35}>{selectedSmallOne.name}</FitText>
        <div className="App__flag-detail__region">
          region: {region}
          {officialName && (
            <div className="App__flag-detail__official-name">
              oficjalna nazwa: {officialName}
            </div>
          )}
        </div>
        <Capital />
      </div>
    </>
  );
};

export default NameSection;
