function Progress({ skill }) {
  return (
    <div className="skill">
      <h3>
        {skill.title} <span className="num">{skill.level}</span>
      </h3>
      <div className="the-progres">
        <span style={{ width: skill.level }}> </span>
      </div>
    </div>
  );
}

export default Progress;
