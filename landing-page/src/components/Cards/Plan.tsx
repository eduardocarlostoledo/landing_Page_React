import { Plan } from "../../types";
export const PlanCard = ({
  typeSupport,
  icon,
  price,
  duration,
  details,
}: Plan) => {
  return (
    <div className="card">
      <h2>{typeSupport}</h2>
      <img src={icon} alt="" />
      <h3>${price}</h3>
      <p>Per {duration}</p>
      <ul className="list">
        <li>{details.hdd} HDD Space</li>
        <li>{details.email} Email Addresses</li>
        <li>{details.subdomain} Subdomains</li>
        <li>{details.database} Databases</li>
        <li>{typeSupport} Support</li>
      </ul>
      <a href="#">Choose Plan</a>
    </div>
  );
};
