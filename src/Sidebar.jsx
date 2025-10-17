import React from "react";
import Oval from "./assets/png/oval.png";
import CoverImage from "./assets/png/cover_image.png";
import Arrow from "./assets/png/arrow.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="cover">
        <img src={CoverImage} className="coverImage" alt="" />
        <div className="user_detail">
          <img src={Oval} alt="oval" />
          <h4>Albert Flores</h4>
          <p>
            Senior Product Designer | UI/UX Designer | Creative Designer | Web
          </p>
          <span>Clinton, Maryland</span>
        </div>
      </div>
      <ul className="profile">
        <li>
          Profile Visitors: <span>140</span>
        </li>
        <li>
          Resume Viewers: <span>83</span>
        </li>
        <li>
          My Jobs: <span>20</span>
        </li>
      </ul>
      <div className="calendar">
        <div>
          <h4>My calendar</h4>
          <p>Upcoming Interviews</p>
        </div>
        <a href="#">
          <img src={Arrow} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
