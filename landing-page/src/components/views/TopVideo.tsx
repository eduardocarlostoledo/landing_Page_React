import VideoDetails from "../VideoDetails";

const details = [
  {
    title: "How To Create Sub Domain",
    minute: "05:18",
  },
  {
    title: "Playing With The DNS",
    minute: "03:18",
  },
  {
    title: "Everything About The Virtual Hosts",
    minute: "05:18",
  },
  {
    title: "How To Monitor Your Website",
    minute: "05:25",
  },
  {
    title: "Uncharted Beating The Last Boss",
    minute: "07:48",
  },
  {
    title: "Ys Oath In Felghana Overview",
    minute: "8:18",
  },
  {
    title: "Ys Series All Games Ending",
    minute: "10:40",
  },
];
function TopVideo() {
  return (
    <div className="top-video" id="video">
      <h2 className="main-title">Top Video</h2>
      <div className="container">
        <section className="one">
          <div className="intro">
            <h2>Top Videos</h2>
            <i className="fas fa-random"></i>
          </div>
          {details.map((el, index) => (
            <VideoDetails details={el} key={index} />
          ))}
        </section>
        <section>
          <div className="imggg">
            <img src="images/video-preview.jpg" alt="" />
            <input
              type="text"
              value="Everything About The Virtual Hosts"
              disabled
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TopVideo;
