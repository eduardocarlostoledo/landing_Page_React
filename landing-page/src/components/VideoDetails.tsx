import { VideoDetail } from "../types";

export const VideoDetails = ({ title, minute }: VideoDetail) => {
  return (
    <div className="main">
      <p>{title}</p>
      <p>{minute}</p>
    </div>
  );
};
