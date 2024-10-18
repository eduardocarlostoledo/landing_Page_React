import { motion } from "framer-motion";

export const Request = () => {
  return (
    <div className="before-finale" id="request">
      <section className="discount">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text"
        >
          <h3>We Have A Discount</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -240 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="ima"
        >
          <img src="images/discount.png" alt="" />
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="request"
      >
        <motion.h3
          initial={{ x: -40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Request A Discount
        </motion.h3>
        <form>
          <input type="text" placeholder="Your Name" /> <br />
          <input type="text" placeholder="Your Email" /> <br />
          <input type="text" placeholder="Your Phone" /> <br />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Tell Us About Your Needs"
          ></textarea>
          <br />
          <motion.button
            initial={{
              backgroundColor: "#fff",
              color: "#2196f3",
            }}
            whileInView={{
              backgroundColor: "#2196f3",
              color: "#fff",
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "reverse",
            }}
          >
            Send
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
};
