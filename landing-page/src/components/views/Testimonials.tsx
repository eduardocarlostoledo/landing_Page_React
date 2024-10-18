import { TestimonialCard } from "../Cards/Testimonial";
import { testimonials } from "../../constants";

export const Testimonials = () => {
  return (
    <div className="testimonials" id="test">
      <h2 className="main-title">Testimonials</h2>
      <div className="container">
        {testimonials.map((el, index) => (
          <TestimonialCard
            name={el.name}
            career={el.career}
            avatar={el.avatar}
            body={el.body}
            stars={el.stars}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
