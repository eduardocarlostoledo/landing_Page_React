function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="text">
          <h1>Welcome, To Golden Site</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className="image">
          <img src="images/landing-image.png" alt="" />
        </div>
      </div>
      <a href="#article" className="go-down">
        <i className="fas fa fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
}

export default HeroSection;
