import Feature from "../Cards/Feature";
const features = ["Quality", "Time", "Passion"];
function Features() {
  return (
    <div className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        {features.map((el) => (
          <Feature title={el} />
        ))}
      </div>
    </div>
  );
}

export default Features;
