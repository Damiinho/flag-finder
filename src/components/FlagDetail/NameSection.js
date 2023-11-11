import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import FitText from "@kennethormandy/react-fittext";

const NameSection = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { officialName, region } = useContext(FlagDetailContext);

  return (
    <div className="App__flag-detail__name">
      <FitText maxFontSize={35}>{selectedSmallOne.name}</FitText>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
      >
        <div style={{ marginTop: 5 }}>
          region: {region}
          {officialName && (
            <div style={{ marginTop: 5 }}>oficjalna nazwa: {officialName}</div>
          )}
          {selectedSmallOne.capital.length !== 0 && (
            <div style={{ marginTop: 5 }}>
              <p>stolica: {selectedSmallOne.capital.join(", ")}</p>
            </div>
          )}
        </div>
        <img style={{ maxHeight: 75 }} src={selectedSmallOne.img} alt="" />
      </div>
    </div>
  );
};

export default NameSection;
