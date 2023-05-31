import { useContext, useEffect } from "react";
import InfoComponent from "./MoreInfoBox/InfoComponent";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";

import seaIMG from "../../img/Blue_sea_wave.svg";
import roadIMG from "../../img/road2.png";
import carIMG from "../../img/car.png";
import UNIMG from "../../img/UN_emblem_blue.svg";
import CurrenciesIMG from "../../img/currencies.svg";
import WebIMG from "../../img/www.svg";
import XIMG from "../../img/x.svg";
import Borders from "./Borders";
import { AppContext } from "../../contexts/AppContext";
import TimeZone from "./TimeZone";

const MoreInfoBox = () => {
  const {
    moreInfoShow,
    setMoreInfoShow,
    landlocked,
    carSide,
    currencies,
    tld,
    UNMember,
    borders,
  } = useContext(FlagDetailContext);
  const { windowWidth } = useContext(AppContext);

  useEffect(() => {
    setMoreInfoShow(false);
  }, [setMoreInfoShow]);

  const { selectedSmallOne } = useContext(AppContext);
  const handleMoreInfoBoxClick = () => {
    if (windowWidth < 688) {
      setMoreInfoShow((prev) => !prev);
    }
  };

  const logoUN = (
    <img
      className={`App__flag-detail__element-logo ${
        UNMember ? "" : "non-member"
      }`}
      src={UNIMG}
      alt="un"
    />
  );
  const detailUN = <p>{UNMember ? "należy do ONZ" : "nie należy do ONZ"}</p>;
  const logoLandlocked = (
    <>
      <img className="wave" src={seaIMG} alt="sea" />
      {landlocked ? <img className="negative" src={XIMG} alt="" /> : null}
    </>
  );
  const logoCarside = (
    <>
      {" "}
      {carSide ? (
        <>
          <img className="carside-road" src={roadIMG} alt="road" />
          <img
            className={`carside-car ${carSide === "left" ? "left" : ""} ${
              carSide === "right" ? "right" : ""
            }`}
            src={carIMG}
            alt="car"
          />
        </>
      ) : (
        ""
      )}
    </>
  );

  const detailCarside = (
    <>
      {carSide ? (
        <p>
          {carSide === "left"
            ? "lewostronny"
            : carSide === "right"
            ? "prawostronny"
            : ""}
        </p>
      ) : (
        ""
      )}
    </>
  );
  const detailCurrencies = currencies ? (
    <div className="currencies-bottom">
      {currencies.name ? <p>{currencies.name}</p> : ""}
      {currencies.key ? <p>{currencies.key}</p> : ""}
      {currencies.symbol ? <p>({currencies.symbol})</p> : ""}
    </div>
  ) : (
    ""
  );
  return (
    <div
      className={`App__flag-detail__elements ${
        moreInfoShow || !(windowWidth < 688) ? "unfold" : ""
      } ${windowWidth < 688 ? "" : "large"}`}
      onClick={handleMoreInfoBoxClick}
    >
      <div className={`App__flag-detail__element-box `}>
        {moreInfoShow || !(windowWidth < 688) ? <TimeZone /> : ""}
        <InfoComponent
          className="un"
          logo={logoUN}
          top={detailUN}
          bottom=""
          hideView={logoUN}
        />
        {landlocked === "brak danych" ? (
          ""
        ) : (
          <InfoComponent
            className="landlocked"
            logo={logoLandlocked}
            top={
              landlocked
                ? "nie posiada dostępu do morza"
                : "posiada dostęp do morza"
            }
            bottom=""
            hideView={logoLandlocked}
          />
        )}
        {carSide ? (
          <InfoComponent
            className="carside"
            logo={logoCarside}
            top="ruch uliczny:"
            bottom={detailCarside}
            hideView={logoCarside}
          />
        ) : (
          ""
        )}{" "}
        {currencies ? (
          <InfoComponent
            className="currencies"
            logo={<img src={CurrenciesIMG} alt="currencies" />}
            top="waluta:"
            bottom={detailCurrencies}
            hideView={`${currencies.key} ${
              currencies.symbol ? `(${currencies.symbol})` : ""
            }`}
          />
        ) : (
          ""
        )}
        {tld ? (
          <InfoComponent
            className="tld"
            logo={<img src={WebIMG} alt="www" />}
            top={<p>domena krajowa: {tld[0]}</p>}
            bottom=""
            hideView={tld[0]}
          />
        ) : (
          ""
        )}
      </div>
      {moreInfoShow || !(windowWidth < 688) ? (
        selectedSmallOne.country ? (
          borders.length > 0 ? (
            <Borders />
          ) : (
            ""
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {windowWidth < 688 && (
        <div className="App__flag-detail__element-box__show">
          {moreInfoShow ? "zwiń informacje" : "rozwiń informacje"}
        </div>
      )}
    </div>
  );
};

export default MoreInfoBox;
