import NavLink from "./views/NavLink";
const links = ["Article", "Gallery", "Features", "Other Links"];
function NavBar() {
  return (
    <div className="header" id="header">
      <div className="container">
        <a className="logo"> Golden </a>
        <ul className="main-nav">
          {links.map((el: string) => (
            <NavLink link={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
