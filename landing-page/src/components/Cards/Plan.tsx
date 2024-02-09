function Plan({ plan }) {
  return (
    <div className="card">
      <h2>{plan.typeSupport}</h2>
      <img src={plan.icon} alt="" />
      <h3>${plan.price}</h3>
      <p>Per {plan.duration}</p>
      <ul className="list">
        <li>{plan.details.hdd} HDD Space</li>
        <li>{plan.details.email} Email Addresses</li>
        <li>{plan.details.subdomain} Subdomains</li>
        <li>{plan.details.database} Databases</li>
        <li>{plan.typeSupport} Support</li>
      </ul>
      <a href="#">Choose Plan</a>
    </div>
  );
}

export default Plan;
