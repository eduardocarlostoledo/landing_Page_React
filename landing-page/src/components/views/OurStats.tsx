const ourStats = [
  {
    title: "Clients",
    stats: "150",
    icon: "far fa-user fa-2x fa-fw",
  },
  {
    title: "Countries",
    stats: "300",
    icon: "fas fa-code fa-2x fa-fw",
  },
  {
    title: "Projects",
    stats: "50",
    icon: "fas fa-globe-asia fa-2x fa-fw",
  },
  {
    title: "Money",
    stats: "500",
    icon: "far fa-money-bill-alt fa-2x fa-fw",
  },
];
function OurStats() {
  return (
    <div className="stats" id="stats">
      <div className="header2">
        <h2>Our Awesome Stats</h2>
      </div>
      <div className="container">
        {ourStats.map((el, index) => (
          <div className="box" key={index}>
            <i className={el.icon}></i>
            <h3 data-goal="150">{el.stats}</h3>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStats;
