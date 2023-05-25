import { useContext } from "react";
import InfoComponent from "./MoreInfoBox/InfoComponent";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";

import seaIMG from "../../img/Blue_sea_wave.svg";
import roadIMG from "../../img/road2.png";
import carIMG from "../../img/car.png";
import UNIMG from "../../img/UN_emblem_blue.svg";
import CurrenciesIMG from "../../img/currencies.svg";
import WebIMG from "../../img/web-icon.svg";
import XIMG from "../../img/x.svg";

const MoreInfoBox = () => {
  const { moreInfoShow, landlocked, carSide, currencies, tld, UNMember } =
    useContext(FlagDetailContext);
  const handleMoreInfoBoxClick = () => {
    console.log("powinien się rozwijać");
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
      <img className="carside-road" src={roadIMG} alt="road" />
      <img
        className={`carside-car ${carSide === "left" ? "left" : ""} ${
          carSide === "right" ? "right" : ""
        }`}
        src={carIMG}
        alt="car"
      />
    </>
  );
  const detailCarside = (
    <>
      <p>
        {carSide === "left"
          ? "ruch lewostronny"
          : carSide === "right"
          ? "ruch prawostronny"
          : ""}
      </p>
    </>
  );
  const detailCurrencies = (
    <div className="currencies-bottom">
      <p>{currencies.key}</p>
      <p>({currencies.symbol})</p>
      <p>{currencies.name}</p>
    </div>
  );
  return (
    <div
      className={`App__flag-detail__elements`}
      onClick={handleMoreInfoBoxClick}
    >
      <div
        className={`App__flag-detail__element-box ${
          moreInfoShow ? "" : "hide"
        }`}
      >
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
            top={landlocked ? "brak dostępu do morza" : "dostęp do morza"}
            bottom=""
            hideView={logoLandlocked}
          />
        )}

        {carSide ? (
          <InfoComponent
            className="carside"
            logo={logoCarside}
            top={detailCarside}
            bottom=""
            hideView={logoCarside}
          />
        ) : (
          ""
        )}
        {currencies ? (
          <InfoComponent
            className="currencies"
            logo={<img src={CurrenciesIMG} alt="currencies" />}
            top="waluta:"
            bottom={detailCurrencies}
            hideView={currencies.key}
          />
        ) : (
          ""
        )}
        {tld ? (
          <InfoComponent
            className="tld"
            logo={<img src={WebIMG} alt="www" />}
            top={<p>domena internetowa: {tld[0]}</p>}
            bottom=""
            hideView={tld[0]}
          />
        ) : (
          ""
        )}
      </div>
      {moreInfoShow ? (
        ""
      ) : (
        <div className="App__flag-detail__element-box__show">
          rozwiń informacje
        </div>
      )}
    </div>
  );
};

export default MoreInfoBox;
