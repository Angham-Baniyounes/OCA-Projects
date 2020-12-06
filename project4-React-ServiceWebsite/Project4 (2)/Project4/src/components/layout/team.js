import React, { Component } from "react";
import TeamMember from "./teamMember";
import "./team.css";
export class Team extends Component {
  state = {
    developers: [
      {
        id: "1",
        name: "Angham",
        img:
          "https://avatars2.githubusercontent.com/u/71583926?s=460&u=290e3c7e943e0eea053b4bb1c89607207d67163a&v=4",
        brief: "CEO, WEBSoft",
      },
      {
        id: "1",
        name: "Waed",
        img:
          "https://avatars2.githubusercontent.com/u/71763834?s=460&u=bb4701d623646c804f4af520e18d45eb97be618d&v=4",
        brief: "CEO, WEBSoft",
      },
      {
        id: "1",
        name: "Suheib",
        img:
          "https://avatars2.githubusercontent.com/u/35002555?s=460&u=28bb5208ede1ec109937413f6e8aef9a46aba794&v=4",
        brief: "CEO, WEBSoft",
      },
      {
        id: "1",
        name: "Monther",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "CEO, WEBSoft ",
      },
    ],
  };
  render() {
    // style={userStyle}
    return (
      <div className="Scroll-Team-Container">
        <div className="TeamMember-Container">
          {this.state.developers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
