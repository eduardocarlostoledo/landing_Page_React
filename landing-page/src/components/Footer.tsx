import { contactUs } from "../constants";

const icons = ["facebook", "twitter", "youtube"];
const numbers = [1, 2, 3, 4, 5];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box one">
          <h2>Golden</h2>
          <div className="links">
            {icons.map((icon, index) => (
              <i className={`fab fa-${icon}`} key={index}></i>
            ))}
          </div>
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
        </div>
        <div className="box two">
          <div className="link">
            {numbers.map((link, index) => (
              <div className="link" key={index}>
                <a href="#">important link {link}</a>
                <hr className={link === 5 ? "none" : ""} />
              </div>
            ))}
          </div>
        </div>
        <div className="box three">
          {contactUs.map((el) => {
            return (
              <div className="text">
                <i className={el.icon}></i>
                <p>{el.text}</p>
              </div>
            );
          })}
          {/* <div className="text">
            <i className="far fa-clock fa-fw"> </i>
            <p>Business Hours: From 10:00 To 18:00</p>
          </div>
          <div className="text">
            <i className="fas fa-phone-volume fa-fw"></i>
            <p>+72459716506</p>
            <p>956425374</p>
          </div> */}
        </div>
        <div className="box four">
          <div className="gary">
            <img src="images/gallery-01.png" alt="" />
            <img src="images/gallery-02.png" alt="" />
            <img src="images/gallery-03.jpg" alt="" />
            <img src="images/gallery-04.png" alt="" />
            <img src="images/gallery-05.jpg" alt="" />
            <img src="images/gallery-06.png" alt="" />
          </div>
        </div>
      </div>
      <div className="finaleee">
        <hr />
        <p>Made With By Golden</p>
      </div>
    </footer>
  );
};
