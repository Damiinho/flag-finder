import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import capitolIMG from "../../img/capitol-building.svg";

const Capital = () => {
  const { selectedSmallOne } = useContext(AppContext);

  if (selectedSmallOne.capital.length !== 0) {
    return (
      <div className="App__flag-detail__capital">
        <img
          className="App__flag-detail__capital-img"
          src={capitolIMG}
          alt="capital"
        />
        <div className="App__flag-detail__capital-description">
          <p>{selectedSmallOne.capital.join(", ")}</p>
        </div>
      </div>
    );
  }
};

export default Capital;
