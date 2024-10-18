import { Feature } from "../Cards/Feature";
const features = ["Quality", "Time", "Passion"];

export const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        {features.map((t, i) => (
          <Feature title={t} key={i} />
        ))}
      </div>
    </div>
  );
};
