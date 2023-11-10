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
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
          className="App__flag-detail__region"
        >
          <div>
            region: {region}
            {officialName && (
              <div className="App__flag-detail__official-name">
                oficjalna nazwa: {officialName}
              </div>
            )}
            <Capital />
          </div>
          <img style={{ maxHeight: 75 }} src={selectedSmallOne.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default NameSection;
