import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text"
        >
          <h1>Welcome, To Toledo Consultora Site</h1>
          <p>
            Aquí puedes compartir todo acerca de tu negocio. Más abajo puedes agregar
            Artículos de interés para tus clientes, eventos, promociones,
            testimonios, features & prices.
          
          </p>
        </motion.div>
        <motion.div
          animate={{ scale: [0.7, 1] }}
          transition={{ duration: 0.5 }}
          className="image"
        >
          <img src="images/landing-image.png" alt="hero_section_image" />
        </motion.div>
      </motion.div>
      <a href="#article" className="go-down">
        <i className="fas fa fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
};
