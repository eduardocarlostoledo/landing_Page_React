import { motion } from "framer-motion";
import { Plan } from "../../types";
import CountUp from "react-countup";
export const PlanCard = ({
  typeSupport,
  icon,
  price,
  duration,
  details,
}: Plan) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="card"
    >
      <h2>{typeSupport}</h2>
      <img src={icon} alt="" />
      <h3>
        <CountUp
          start={0}
          end={price}
          duration={0.5}
          useEasing={false}
          preserveValue
          prefix="$"
          enableScrollSpy
        ></CountUp>
      </h3>
      <p>Per {duration}</p>
      <ul className="list">
        <li>{details.hdd} HDD Space</li>
        <li>{details.email} Email Addresses</li>
        <li>{details.subdomain} Subdomains</li>
        <li>{details.database} Databases</li>
        <li>{typeSupport} Support</li>
      </ul>
      <a href="#">Choose Plan</a>
    </motion.div>
  );
};
