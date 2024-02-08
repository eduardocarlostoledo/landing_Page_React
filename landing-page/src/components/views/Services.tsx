import Service from "../Cards/Service";

const services = [
  "Security",
  "Fixing Issues",
  "Location",
  "Coding",
  "Security",
  "Marketing",
];
function Services() {
  return (
    <div className="services" id="services">
      <h2 className="main-title">Services</h2>
      <div className="container">
        {services.map((el, index) => (
          <Service title={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Services;
