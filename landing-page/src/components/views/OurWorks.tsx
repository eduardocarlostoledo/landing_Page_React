import { OurWork } from "../Cards/OurWork";
import { ourWorks } from "../../constants";

export const OurWorks = () => {
  return (
    <div className="how" id="how">
      <h2 className="main-title">How It Works ?</h2>
      <div className="container">
        <div className="imag">
          <img src="images/work-steps.png" alt="" />
        </div>
        <div className="boxs">
          {ourWorks.map((el, index) => (
            <OurWork title={el.title} body={el.body} src={el.src} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
