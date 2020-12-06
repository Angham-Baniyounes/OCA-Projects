import React, { Component } from "react";
import "./team.css";
class TeamMember extends Component {
  render() {
    const { name, img, brief } = this.props.member;
    return (
      <div className="team-container">
        <img src={img} alt="Avatar" className="image" />
        <div className="overlay">
          <h3 className="overlay-header">{name}</h3>
          <div className="text">{brief}</div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
