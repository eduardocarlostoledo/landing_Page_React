const galleries = ["1.png", "2.png", "3.jpg", "4.png", "5.jpg", "6.png"];
function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <h2 className="main-title">Gallery</h2>
      <div className="container">
        {galleries.map((gallery) => (
          <div className="box">
            <div className="image">
              <img src={"images/gallery-0" + gallery} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
