import { motion } from "framer-motion";

type serviceTitle = {
  title: string;
};
export const Service = ({ title }: serviceTitle) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="box"
    >
      <i className="fas fa-user-shield fa-4x"></i>
      <h3>{title}</h3>
      <div className="info">
        <a href="#">Details</a>
      </div>
    </motion.div>
  );
};
