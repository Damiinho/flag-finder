import { useContext } from "react";
import XIMG from "../../img/x.svg";
import { AppContext } from "../../contexts/AppContext";

const Exit = () => {
  const { setSelectedSmallOne } = useContext(AppContext);

  const handleClick = () => {
    setSelectedSmallOne(false);
  };
  return (
    <div className="App__flag-detail__exit" onClick={handleClick}>
      <img src={XIMG} alt="exit" />
    </div>
  );
};

export default Exit;
