import MegaMenu from "./MegaMenu";

function NavLink({ showicon, link, icon }) {
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
}

export default NavLink;
