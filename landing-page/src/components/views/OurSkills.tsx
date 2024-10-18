import { Progress } from "../Progress";
import { skills } from "../../constants";
import { motion } from "framer-motion";

export const OurSkills = () => {
  return (
    <div className="our-skills" id="skill">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="image"
        >
          <img src="images/skills.png" alt="" />
        </motion.div>
        <div className="skills">
          {skills.map((sk, index) => (
            <Progress title={sk.title} level={sk.level} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
