const galleries = ["1.png", "2.png", "3.jpg", "4.png", "5.jpg", "6.png"];
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <h2 className="main-title">Gallery</h2>
      <div className="container">
        {galleries.map((gallery) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="box"
          >
            <div className="image">
              <img
                src={"images/gallery-0" + gallery}
                alt={"gallery-" + gallery}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
