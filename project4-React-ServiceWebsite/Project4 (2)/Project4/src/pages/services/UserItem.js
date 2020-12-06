import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserItem extends Component {
  render() {
    const { service, avatar_url, html_url } = this.props.user;
    return (
      <div className="m-card text-center">
        <img
          src={avatar_url}
          alt=""
          className="img-1 round-border"
          style={{ width: "250px", height: "200px" }}
        />
        <h3>{service}</h3>
        <div>
          <Link to={html_url}>
            <a
              href={html_url}
              className="btn-Services btn-primary btn-md my-4 round-border fourth"
              target="_blank"
            >
              Discuss My Software
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserItem;
