const InfoComponent = (props) => {
  return (
    <div className="App__flag-detail__info-box__infocomponent">
      <img src={props.img} alt="" />
      <p style={{ fontSize: props.fontSize ? props.fontSize : 12 }}>
        {props.text}
      </p>
    </div>
  );
};

export default InfoComponent;
