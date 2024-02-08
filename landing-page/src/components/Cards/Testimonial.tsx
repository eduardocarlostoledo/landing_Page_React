function Testimonial({ testimonial }) {
  return (
    <div className="box">
      <img src={testimonial.avatar} alt="" />
      <h3>{testimonial.name}</h3>
      <span className="title">{testimonial.career}</span>
      <div className="rate">
        {testimonial.experience.map((el) => (
          <i className="filled fas fa-star"></i>
        ))}
        <i className="far fa-star"></i>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
        veniam. Voluptatum eos laudantium nobis, quod labore rem
      </p>
    </div>
  );
}

export default Testimonial;
