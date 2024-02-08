import Testimonial from "../Cards/Testimonial";

const testimonials = [
  {
    name: "Mohamed Farag",
    avatar: "images/avatar-01.png",
    career: "Full Stack Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3, 4],
  },
  {
    name: "Mohamed Ibrahim",
    avatar: "images/avatar-02.png",
    career: "Front End Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3, 4],
  },
  {
    name: "Shady Nabil",
    avatar: "images/avatar-03.png",
    career: "Back End Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3],
  },
  {
    name: "Amr Hendawy",
    avatar: "images/avatar-04.png",
    career: "MERN Stack Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3, 4, 5],
  },
  {
    name: "Sherief Ashraf",
    avatar: "images/avatar-05.png",
    career: "MEVN Stack Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3],
  },
  {
    name: "Osama Mohamed",
    avatar: "images/avatar-06.png",
    career: "MEAN Stack Developer",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, veniam. Voluptatum eos laudantium nobis, quod labore rem",
    experience: [1, 2, 3, 4],
  },
];
function Testimonials() {
  return (
    <div className="testimonials" id="test">
      <h2 className="main-title">Testimonials</h2>
      <div className="container">
        {testimonials.map((el, index) => (
          <Testimonial testimonial={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
