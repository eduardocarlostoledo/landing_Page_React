import { OurWork } from "../Cards/OurWork";
import { ourWorks } from "../../constants";
import { motion } from "framer-motion";

export const OurWorks = () => {
  return (
    <div className="how" id="how">
      <h2 className="main-title">How It Works ?</h2>
      <div className="container">
        <div className="imag">
          <motion.img
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, when: "afterChildren" }}
            src="images/work-steps.png"
            alt=""
          />
        </div>
        <div className="boxs">
          {ourWorks.map((el, index) => (
            <OurWork title={el.title} body={el.body} src={el.src} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
