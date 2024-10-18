type featureTitle = {
  title: string;
};
export const Feature = ({ title }: featureTitle) => {
  return (
    <div className={`box ${title.toLowerCase()}`}>
      <div className="img-holder">
        <img src="images/features-01.jpg" alt="" />
      </div>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic
        veniam eligendi minima
      </p>
      <a href="#">More</a>
    </div>
  );
};
