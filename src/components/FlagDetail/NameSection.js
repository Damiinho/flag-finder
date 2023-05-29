import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";

const NameSection = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { officialName, region } = useContext(FlagDetailContext);

  return (
    <>
      <div className="App__flag-detail__name">{selectedSmallOne.name}</div>
      {officialName && (
        <div className="App__flag-detail__official-name">
          {officialName} ({region})
        </div>
      )}
      {!officialName && (
        <div className="App__flag-detail__region">{region}</div>
      )}
    </>
  );
};

export default NameSection;
