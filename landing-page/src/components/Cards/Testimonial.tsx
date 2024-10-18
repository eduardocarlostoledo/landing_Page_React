import { Testimonial } from "../../types";
import { motion } from "framer-motion";

export const TestimonialCard = ({
  avatar,
  name,
  career,
  stars,
  body,
}: Testimonial) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="box"
    >
      <img src={avatar} alt="" />
      <h3>{name}</h3>
      <span className="title">{career}</span>
      <div className="rate">
        {stars.map(() => (
          <i className="filled fas fa-star"></i>
        ))}
        <i className="far fa-star"></i>
      </div>
      <p>{body}</p>
    </motion.div>
  );
};
