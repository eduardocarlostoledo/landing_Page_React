import { motion } from "framer-motion";

type Skill = {
  title: string;
  level: string;
};

export const Progress = ({ title, level }: Skill) => {
  return (
    <motion.div className="skill">
      <h3>
        {title} <span className="num">{level}</span>
      </h3>
      <div className="the-progres">
        <motion.span initial={{ width: 0 }} whileInView={{ width: level }}>
          {" "}
        </motion.span>
      </div>
    </motion.div>
  );
};
