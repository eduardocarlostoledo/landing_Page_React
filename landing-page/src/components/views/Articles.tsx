import Article from "../Cards/Article";
const articles = [
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-01.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-02.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-03.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-04.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-05.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-06.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-07.jpg",
  },
  {
    title: "Test Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,deserunt repellendus.",
    photo: "../../../public/images/cat-08.jpg",
  },
];
function Articles() {
  return (
    <div className="article" id="article">
      <h2 className="main-title">Article</h2>
      <div className="container">
        {articles.map((article, index) => (
          <Article article={articles[index]} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
