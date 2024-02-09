function VideoDetails({ details }) {
  return (
    <div className="main">
      <p>{details.title}</p>
      <p>{details.minute}</p>
    </div>
  );
}

export default VideoDetails;
