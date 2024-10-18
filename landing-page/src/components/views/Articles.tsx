import { ArticleCard } from "../Cards/Article";
import { articles } from "../../constants";
import { motion } from "framer-motion";

export const Articles = () => {
  return (
    <div className="article" id="article">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="main-title"
      >
        Article
      </motion.h2>
      <div className="container">
        {articles.map((article, index) => (
          <ArticleCard
            title={article.title}
            body={article.body}
            photo={article.photo}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
