import { Service } from "../Cards/Service";
import { services } from "../../constants";

export const Services = () => {
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
};
