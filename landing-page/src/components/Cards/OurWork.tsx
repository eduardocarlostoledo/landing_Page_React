function OurWork({ props }) {
  return (
    <div className="box">
      <img src={props.src} alt="" />
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default OurWork;
