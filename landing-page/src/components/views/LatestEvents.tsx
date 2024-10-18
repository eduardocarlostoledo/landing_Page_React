export const LatestEvents = () => {
  const counters = [
    {
      num: 24,
      time: "Days",
    },
    {
      num: 23,
      time: "Hours",
    },
    {
      num: 58,
      time: "Minutes",
    },
    {
      num: 46,
      time: "Seconds",
    },
  ];
  return (
    <div className="events" id="events">
      <div className="dots dots-down"></div>
      <div className="dots dots-up"></div>
      <h2 className="main-title">Latest Events</h2>
      <div className="container">
        <div className="ph">
          <img src="images/events.png" alt="" />
        </div>
        <div className="counter">
          <div className="add">
            {counters.map((el) => {
              return (
                <div className="con">
                  <h3>
                    0 :
                    <br />
                    {el.num}
                  </h3>
                  <p>{el.time}</p>
                </div>
              );
            })}
          </div>
          <div className="text">
            <h3>Tech Masters Event 2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter Your Email" />
        <a href="#">Subscribe</a>
      </div>
    </div>
  );
};
