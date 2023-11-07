import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const MainFlag = () => {
  const { selectedSmallOne } = useContext(AppContext);

  return (
    <div className="App__flag-detail__img-flag">
      <img src={selectedSmallOne.img} alt="" />
    </div>
  );
};

export default MainFlag;
