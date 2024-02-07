import NavLink from "./NavLink";
const links = [
  {
    link: "Testimonials",
    icon: "far fa-comments fa-fw",
  },
  {
    link: "Team Members",
    icon: "far fa-user fa-fw",
  },
  {
    link: "Services",
    icon: "far fa-building fa-fw",
  },
  {
    link: "Our Skills",
    icon: "far fa-check-circle fa-fw",
  },
  {
    link: "How It Works",
    icon: "far fa-clipboard fa-fw",
  },
  {
    link: "Events",
    icon: "far fa-clipboard fa-fw",
  },
  {
    link: "Pricing Plans",
    icon: "far fa-calendar-alt fa-fw",
  },
  {
    link: "Top Videos",
    icon: "fas fa-server fa-fw",
  },
  {
    link: "Stats",
    icon: "far fa-play-circle fa-fw",
  },
  {
    link: "Request A Discount",
    icon: "fas fa-percent fa-fw",
  },
];
function MegaMenu() {
  return (
    <div className="mega-menue">
      <div className="image">
        <img src="images/megamenu.png" alt="" />
      </div>
      <ul className="links">
        {links.slice(0, 5).map((el) => (
          <NavLink link={el.link} showicon={true} icon={el.icon} />
        ))}
      </ul>
      <ul className="links">
        {links.slice(5).map((el) => (
          <NavLink link={el.link} showicon={true} icon={el.icon} />
        ))}
      </ul>
    </div>
  );
}

export default MegaMenu;
