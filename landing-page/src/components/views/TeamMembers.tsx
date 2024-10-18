import { TeamMemberCard } from "../Cards/TeamMember";
import { teamMembers } from "../../constants";

export const TeamMembers = () => {
  return (
    <div className="team">
      <h2 className="main-title">TEAM MEMBERS</h2>
      <div className="container">
        {teamMembers.map((el, index) => (
          <TeamMemberCard
            name={el.name}
            body={el.body}
            avatar={el.avatar}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
