import TeamMember from "../Cards/TeamMember";

const teamMembers = [
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-01.jpg",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-02.jpg",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-03.jpg",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-04.jpg",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-05.png",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-06.png",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-07.jpg",
  },
  {
    name: "Name",
    body: "Simple Short Description",
    avatar: "images/team-08.jpg",
  },
];
function TeamMembers() {
  return (
    <div className="team">
      <h2 className="main-title">TEAM MEMBERS</h2>
      <div className="container">
        {teamMembers.map((el, index) => (
          <TeamMember teamMember={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
