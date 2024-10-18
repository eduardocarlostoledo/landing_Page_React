import { Testimonial } from "../../types";

export const TestimonialCard = ({
  avatar,
  name,
  career,
  stars,
  body,
}: Testimonial) => {
  return (
    <div className="box">
      <img src={avatar} alt="" />
      <h3>{name}</h3>
      <span className="title">{career}</span>
      <div className="rate">
        {stars.map(() => (
          <i className="filled fas fa-star"></i>
        ))}
        <i className="far fa-star"></i>
      </div>
      <p>{body}</p>
    </div>
  );
};
