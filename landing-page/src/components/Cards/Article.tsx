function Article({ article }) {
  return (
    <div className="box">
      <img src={article.photo} alt="" />
      <div className="content">
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
      <div className="info">
        <a href="#">Read More</a>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
}

export default Article;
