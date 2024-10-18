import { ourStats } from "../../constants";

export const OurStats = () => {
  return (
    <div className="stats" id="stats">
      <div className="header2">
        <h2>Our Awesome Stats</h2>
      </div>
      <div className="container">
        {ourStats.map((el, index) => (
          <div className="box" key={index}>
            <i className={el.icon}></i>
            <h3 data-goal="150">{el.Statistics}</h3>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
