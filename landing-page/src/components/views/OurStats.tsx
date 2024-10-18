import { ourStats } from "../../constants";
import { motion } from "framer-motion";

export const OurStats = () => {
  return (
    <div className="stats" id="stats">
      <div className="header2">
        <motion.h2
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Awesome Stats
        </motion.h2>
      </div>
      <div className="container">
        {ourStats.map((el, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="box"
            key={index}
          >
            <i className={el.icon}></i>
            <h3 data-goal="150">{el.Statistics}</h3>
            <p>{el.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
