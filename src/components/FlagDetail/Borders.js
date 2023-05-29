import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import IslandIMG from "../../img/Island_with_Trees_Flat_Icon_Vector.svg";

const Borders = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { borders } = useContext(FlagDetailContext);

  return (
    <>
      {selectedSmallOne.country ? (
        <div className="App__flag-detail__borders">
          {borders.length > 0 ? (
            <div className="App__flag-detail__borders-full">
              <div className="App__flag-detail__borders-full__content">
                granice lądowe: {borders.join(", ")}
              </div>
            </div>
          ) : (
            <>
              <div className="App__flag-detail__borders-empty">
                <img src={IslandIMG} alt="island" />
                <p>wyspy</p>
              </div>
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Borders;
