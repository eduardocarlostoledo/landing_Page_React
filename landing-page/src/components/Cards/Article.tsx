import { type Article } from "../../types";
import { motion } from "framer-motion";

export const ArticleCard = ({ title, photo, body }: Article) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="box"
    >
      <img src={photo} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="info">
        <a href="#">Read More</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </motion.div>
  );
};
