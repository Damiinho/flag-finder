import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import { AppContext } from "../../../contexts/AppContext";

const InfoComponent = (props) => {
  const { moreInfoShow } = useContext(FlagDetailContext);
  const { windowWidth } = useContext(AppContext);

  return (
    <div
      className={`App__flag-detail__element ${props.className} ${
        moreInfoShow || !(windowWidth < 688) ? "unfold" : ""
      }`}
    >
      {moreInfoShow || !(windowWidth < 688) ? (
        <>
          {" "}
          <div className="App__flag-detail__element-logo">{props.logo}</div>
          <div className="App__flag-detail__element-detail">
            <div className="App__flag-detail__element-detail__top">
              {props.top}
            </div>
            <div className="App__flag-detail__element-detail__bottom">
              {props.bottom}
            </div>
          </div>
        </>
      ) : (
        <div className="App__flag-detail__element-hide">{props.hideView}</div>
      )}
    </div>
  );
};

export default InfoComponent;
