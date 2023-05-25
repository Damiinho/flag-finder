import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const MainFlag = () => {
  const { selectedSmallOne } = useContext(AppContext);

  return (
    <img
      className="App__flag-detail__img-flag"
      src={selectedSmallOne.img}
      alt=""
    />
  );
};

export default MainFlag;
