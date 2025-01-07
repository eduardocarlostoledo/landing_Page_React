import { NavLink } from "./views/NavLink";

const links = ["Article", "Gallery", "Features", "Other Links"];

export const NavBar = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <a className="logo"> Toledo Consultora </a>
        <ul className="main-nav">
          {links.map((el: string) => (
            <NavLink link={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};
