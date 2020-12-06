import React, { Component } from "react";
import UserItem from "./UserItem";
import Gallery from "./Gallery";

class Users extends Component {
  state = {
    users: [
      {
        id: "Wep-App-Development",
        service: "Wep App Development",
        avatar_url:
          "https://www.guglytech.com/wp-content/uploads/2020/03/Web-Application-Development-GuglY-Tech.jpg",
        html_url: "/details/Wep-App-Development",
      },
      {
        id: "Mobile-App-Development",
        service: "Mobile App Development",
        avatar_url:
          "https://www.scnsoft.com/blog-pictures/web-portals/website-vs-web-portal.png",

        html_url: "/details/Mobile-App-Development",
      },
      {
        id: "Complete-software-development-outsourcing",
        service: "development outsourcing",
        avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",

        html_url: "/details/Complete-software-development-outsourcing",
      },
      {
        id: "Software-support-and-evolution",
        service: "Software support",
        avatar_url:
          "https://www.guglytech.com/wp-content/uploads/2020/03/Web-Application-Development-GuglY-Tech.jpg",
        html_url: "/details/Software-support-and-evolution",
      },
      {
        id: "Software-Consulting",
        service: "Software Consulting",
        avatar_url:
          "https://makemysite.gr/wp-content/uploads/2013/01/web_consulting.jpg",

        html_url: "/details/Software-Consulting",
      },
      {
        id: "Development-team-augmentation",
        service: "Team augmentation",
        avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",
        html_url: "/details/Development-team-augmentation",
      },
      // {
      //   id: "7",
      //   service: "Mobile App Development",
      //   avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",

      //   html_url: "/details/6",
      // },
      // {
      //   id: "8",
      //   service: "Mobile App Development",
      //   avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",

      //   html_url: "/details/6",
      // },
    ],
  };
  render() {
    return (
      <div>
        <Gallery />
        <div style={userStyle} className="my-3">
          {this.state.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}
const userStyle = {
  // width: "25vw",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "2rem",
};
export default Users;
