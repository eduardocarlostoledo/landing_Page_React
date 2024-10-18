import { MegaMenu } from "./MegaMenu";
type props = {
  showicon?: boolean;
  link: string;
  icon?: string;
};
export const NavLink = ({ showicon, link, icon }: props) => {
  return (
    <li
      className={link == "Other Links" ? "show" : ""}
      style={{ cursor: "pointer" }}
    >
      <a href={"#" + link.toLowerCase()}>
        {showicon && <i className={icon}></i>} {link}
      </a>
      {link == "Other Links" ? <MegaMenu /> : ""}
    </li>
  );
};
