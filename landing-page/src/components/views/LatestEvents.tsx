import { motion } from "framer-motion";

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
      <div className="dots dots-down" style={{ perspective: "reverse" }}></div>
      <div className="dots dots-up"></div>
      <h2 className="main-title">Latest Events</h2>
      <div className="container">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          className="ph"
        >
          <img src="images/events.png" alt="" />
        </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text"
          >
            <h3>Tech Masters Event 2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </motion.div>
        </div>
      </div>
      <div className="form">
        <motion.input
          initial={{ scaleX: 1 }}
          whileFocus={{ scaleX: [1.1] }}
          transition={{
            duration: 0.5,
          }}
          type="text"
          placeholder="Enter Your Email"
        />
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          href="#"
        >
          Subscribe
        </motion.a>
      </div>
    </div>
  );
};
