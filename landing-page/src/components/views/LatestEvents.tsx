function LatestEvents() {
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
            <div className="con">
              <h3>
                0-
                <br />
                24
              </h3>
              <p>Days</p>
            </div>
            <div className="con">
              <h3>
                0-
                <br />
                23
              </h3>
              <p>Hours</p>
            </div>
            <div className="con">
              <h3>
                0-
                <br />
                58
              </h3>
              <p>Minutes</p>
            </div>
            <div className="con">
              <h3>
                0-
                <br />
                46
              </h3>
              <p>Seconds</p>
            </div>
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
}

export default LatestEvents;
