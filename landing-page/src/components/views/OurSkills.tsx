import Progress from "../Progress";
const skills = [
  {
    title: "HTML",
    level: "60%",
  },
  {
    title: "CSS",
    level: "90%",
  },
  {
    title: "JavaScript",
    level: "70%",
  },
  {
    title: "Python",
    level: "80%",
  },
];
function OurSkills() {
  return (
    <div className="our-skills" id="skill">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <div className="image">
          <img src="images/skills.png" alt="" />
        </div>
        <div className="skills">
          {skills.map((sk, index) => (
            <Progress skill={sk} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSkills;
