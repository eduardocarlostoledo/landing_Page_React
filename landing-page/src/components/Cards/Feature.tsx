function Feature(props) {
  return (
    <div className={`box ${props.title.toLowerCase()}`}>
      <div className="img-holder">
        <img src="images/features-01.jpg" alt="" />
      </div>
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic
        veniam eligendi minima
      </p>
      <a href="#">More</a>
    </div>
  );
}

export default Feature;
