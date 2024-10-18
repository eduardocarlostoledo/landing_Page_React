import { VideoDetails } from "../VideoDetails";
import { videoDetails } from "../../constants";

export const TopVideo = () => {
  return (
    <div className="top-video" id="video">
      <h2 className="main-title">Top Video</h2>
      <div className="container">
        <section className="one">
          <div className="intro">
            <h2>Top Videos</h2>
            <i className="fas fa-random"></i>
          </div>
          {videoDetails.map((el, index) => (
            <VideoDetails title={el.title} minute={el.minute} key={index} />
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
};
