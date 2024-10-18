import { Progress } from "../Progress";
import { skills } from "../../constants";

export const OurSkills = () => {
  return (
    <div className="our-skills" id="skill">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <div className="image">
          <img src="images/skills.png" alt="" />
        </div>
        <div className="skills">
          {skills.map((sk, index) => (
            <Progress title={sk.title} level={sk.level} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
