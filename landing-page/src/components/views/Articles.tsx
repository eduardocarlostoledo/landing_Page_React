import { ArticleCard } from "../Cards/Article";
import { articles } from "../../constants";

export const Articles = () => {
  return (
    <div className="article" id="article">
      <h2 className="main-title">Article</h2>
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
