import Plan from "../Cards/Plan";

const plans = [
  {
    price: 15,
    duration: "Month",
    typeSupport: "Basic",
    icon: "images/hosting-basic.png",
    details: {
      hdd: 10,
      email: 5,
      subdomain: 2,
      database: 4,
    },
  },
  {
    price: 35,
    duration: "6 Months",
    typeSupport: "Advanced",
    icon: "images/hosting-advanced.png",
    details: {
      hdd: 20,
      email: 10,
      subdomain: 5,
      database: 8,
    },
  },
  {
    price: 50,
    duration: "Year",
    typeSupport: "Professional",
    icon: "images/hosting-professional.png",
    details: {
      hdd: 50,
      email: 20,
      subdomain: 10,
      database: 20,
    },
  },
];

function Plans() {
  return (
    <div className="pricing" id="pricing">
      <div className="dots dots-down"></div>
      <div className="dots dots-up"></div>
      <h2 className="main-title">PRICING PLANS</h2>
      <div className="container">
        {plans.map((el, index) => (
          <Plan plan={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Plans;
