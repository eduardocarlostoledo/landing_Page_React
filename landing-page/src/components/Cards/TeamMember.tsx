import { TeamMember } from "../../types";
import { motion } from "framer-motion";

export const TeamMemberCard = ({ ...teamMember }: TeamMember) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="box"
    >
      <div className="data">
        <div className="pho">
          <img src={teamMember.avatar} alt="" />
        </div>
        <div className="link">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="text">
          <h3>{teamMember.name}</h3>
          <p>{teamMember.body}</p>
        </div>
      </div>
    </motion.div>
  );
};
