import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import FitText from "@kennethormandy/react-fittext";

const NameSection = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { officialName, region } = useContext(FlagDetailContext);

  return (
    <>
      <div className="App__flag-detail__name">
        <FitText>{selectedSmallOne.name}</FitText>
        <div className="App__flag-detail__region">({region})</div>
      </div>
      {officialName && (
        <div className="App__flag-detail__official-name">{officialName}</div>
      )}
    </>
  );
};

export default NameSection;
