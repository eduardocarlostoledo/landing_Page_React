export const Request = () => {
  return (
    <div className="before-finale" id="request">
      <section className="discount">
        <div className="text">
          <h3>We Have A Discount</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
        </div>
        <div className="ima">
          <img src="images/discount.png" alt="" />
        </div>
      </section>
      <section className="request">
        <h3>Request A Discount</h3>
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
          <button>Send</button>
        </form>
      </section>
    </div>
  );
};
