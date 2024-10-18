import { type Article } from "../../types";

export const ArticleCard = ({ title, photo, body }: Article) => {
  return (
    <div className="box">
      <img src={photo} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="info">
        <a href="#">Read More</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};
