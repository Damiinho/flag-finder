const Link = (props) => (
  <a
    href={props.link}
    target="blank"
    className="App__flag-detail__linkbox-link"
  >
    <div className="App__flag-detail__linkbox-link__img">
      <img src={props.img} alt={props.alt} />
    </div>
    {/* <p>{props.title}</p> */}
  </a>
);

export default Link;
