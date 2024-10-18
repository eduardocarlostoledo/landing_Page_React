import { NavLink } from "./NavLink";
import { otherLinks } from "../../constants";

export const MegaMenu = () => {
  return (
    <div className="mega-menue">
      <div className="image">
        <img src="images/megamenu.png" alt="" />
      </div>
      <ul className="links">
        {otherLinks.slice(0, 5).map((el) => (
          <NavLink link={el.link} showicon={true} icon={el.icon} />
        ))}
      </ul>
      <ul className="links">
        {otherLinks.slice(5).map((el) => (
          <NavLink link={el.link} showicon={true} icon={el.icon} />
        ))}
      </ul>
    </div>
  );
};
