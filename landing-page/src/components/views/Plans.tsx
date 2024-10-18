import { PlanCard } from "../Cards/Plan";
import { plans } from "../../constants";

export const Plans = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="dots dots-down"></div>
      <div className="dots dots-up"></div>
      <h2 className="main-title">PRICING PLANS</h2>
      <div className="container">
        {plans.map((el, index) => (
          <PlanCard
            price={el.price}
            duration={el.duration}
            typeSupport={el.typeSupport}
            icon={el.icon}
            details={el.details}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
