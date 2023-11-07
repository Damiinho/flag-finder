const InfoComponent = (props) => {
  return (
    <div className="info__main-infocomponent">
      <img src={props.img} alt="" />
      <p style={{ fontSize: props.fontSize ? props.fontSize : 12 }}>
        {props.text}
      </p>
    </div>
  );
};

export default InfoComponent;
