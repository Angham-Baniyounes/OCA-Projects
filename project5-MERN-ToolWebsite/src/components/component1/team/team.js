import React, { Component } from "react";
import TeamMember from "./teamMember";
import "./team.css";
export class Team extends Component {
  state = {
    developers: [
      {
        id: "1",
        name: "Angham B.Younes",
        img:
          "https://avatars2.githubusercontent.com/u/71583926?s=460&u=290e3c7e943e0eea053b4bb1c89607207d67163a&v=4",
        brief: "Product Owner",
      },
      {
        id: "1",
        name: "Diaa Jamel",
        img:
          "https://avatars0.githubusercontent.com/u/71770261?s=460&u=0a269e020a0af1045c8ce24ab773a2c886eaf871&v=4",
        brief: "Front-end Developer",
      },
      {
        id: "1",
        name: "Mohamd Alzoubi",
        img:
          "https://avatars1.githubusercontent.com/u/71769944?s=460&u=fd9f6f19861dbb2a0d1b72646faeb0b6386c7d70&v=4",
        brief: "Full-stack Developer,",
      },
      {
        id: "1",
        name: "Monther Twaissi",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "Scrum Master, ",
      },
      {
        id: "1",
        name: "Osama Aburabi'e",
        img:
          "https://avatars1.githubusercontent.com/u/67992414?s=460&u=c503c163561fb011dcfeac3d7b475735582b35c8&v=4",
        brief: "Back-end Developer ",
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
