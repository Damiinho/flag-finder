import CrossIMG from "../img/cross.svg";

const SelectShape = () => {
  const ButtonShape = (props) => {
    return (
      <button className={`shape ${props.shape}`}>
        {props.content ? props.content : null}
        {props.img ? <img src={props.img} alt={props.shape} /> : null}
      </button>
    );
  };
  return (
    <div className="selectors__shapes">
      <p className="selectors__shapes-description">inne</p>
      <div className="selectors__shapes__button-box">
        <ButtonShape shape="vertical" />
        <ButtonShape shape="horizontal" />
        <ButtonShape shape="cross" img={CrossIMG} />
        <ButtonShape shape="diagonal" />
        <ButtonShape shape="triangle" />
        <ButtonShape shape="circle" />
        <ButtonShape shape="emblem" />
        <ButtonShape shape="word" />
        <ButtonShape shape="sun" />
        <ButtonShape shape="moon" />
        <ButtonShape shape="star" />
        <ButtonShape shape="plant" />
        <ButtonShape shape="animal" />
        <ButtonShape shape="weapon" />
        <ButtonShape shape="contours" />
        <ButtonShape shape="building" />
        <ButtonShape shape="other" />
      </div>
    </div>
  );
};

export default SelectShape;
