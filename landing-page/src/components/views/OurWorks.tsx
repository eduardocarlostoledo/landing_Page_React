import OurWork from "../Cards/OurWork";

const ourWorks = [
  {
    title: "Business Analysis",
    body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
    src: "images/work-steps.png",
  },
  {
    title: "Architecture",
    body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
    src: "images/work-steps-2.png",
  },
  {
    title: "Developement",
    body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
    src: "images/work-steps-3.png",
  },
];
function OurWorks() {
  return (
    <div className="how" id="how">
      <h2 className="main-title">How It Works ?</h2>
      <div className="container">
        <div className="imag">
          <img src="images/work-steps.png" alt="" />
        </div>
        <div className="boxs">
          {ourWorks.map((el, index) => (
            <OurWork props={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
