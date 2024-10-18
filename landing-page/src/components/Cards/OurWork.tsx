import { Work } from "../../types";
import { motion } from "framer-motion";

export const OurWork = ({ title, body, src }: Work) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="box"
    >
      <img src={src} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </motion.div>
  );
};
