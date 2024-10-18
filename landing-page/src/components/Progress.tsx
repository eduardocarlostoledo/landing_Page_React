type Skill = {
  title: string;
  level: string;
};

export const Progress = ({ title, level }: Skill) => {
  return (
    <div className="skill">
      <h3>
        {title} <span className="num">{level}</span>
      </h3>
      <div className="the-progres">
        <span style={{ width: level }}> </span>
      </div>
    </div>
  );
};
