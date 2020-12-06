import React, { Component } from "react";
import CoverImg from "../Assest/Cover.jpg";
import PFP_11 from "../Assest/PFP_11.jpg";
import "../S-Style/CoverProfile.scss";
import { FaUserEdit } from "react-icons/fa";

class CoverProfile extends Component {
  state = {
    ProfileImg: { PFP_11 },
    CoverImg1: { CoverImg },
  };
  //Edit Profile Image
  imageHandlerProfile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ ProfileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //Edit Cover Image
  imageHandlerCover = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ CoverImg1: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { ProfileImg } = this.state;
    const { CoverImg1 } = this.state;
    return (
      <header>
        <div>
          <div className="CoverImg">
            <div className="BtnEditCover">
              <input
                type="file"
                name="image-upload-Cover"
                id="inputCover"
                accept="image/*"
                onChange={this.imageHandlerCover}
              />
              <div className="label">
                <label htmlFor="inputCover" className="image-upload">
                  <FaUserEdit className="AddImageIconCover" />
                </label>
              </div>
            </div>
            <img src={CoverImg1} alt="" />
          </div>
          <div className="Profile-data">
            <div className="ProfileImg">
              <div className="BtnEdit">
                <input
                  type="file"
                  name="image-upload"
                  id="input"
                  accept="image/*"
                  onChange={this.imageHandlerProfile}
                />
                <div className="label">
                  <label htmlFor="input" className="image-upload">
                    <FaUserEdit className="AddImageIconProfile" />
                  </label>
                </div>
              </div>
              <img src={ProfileImg} alt="" />
            </div>
            <h2>{sessionStorage.getItem("Name")}</h2>
          </div>
        </div>
      </header>
    );
  }
}

export default CoverProfile;
