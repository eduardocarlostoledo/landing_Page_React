import { Work } from "../../types";

export const OurWork = ({ title, body, src }: Work) => {
  return (
    <div className="box">
      <img src={src} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
