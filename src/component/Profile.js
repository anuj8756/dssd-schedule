import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: "HTML,CSS,JS",
    duration: "2 Hourse",
    icon: <BiBook />,
  },

  {
    title: "Microsoft",
    duration: "2 Hourse",
    icon: <BiBook />,
  },

  {
    title: "Telly",
    duration: "2 Hourse",
    icon: <BiBook />,
  },
];
const Profile = () => {
  return (
    <div className="profile" id="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src="/images/images1.png" alt="" />
          <h3 className="username">Deepak</h3>
        </div>
        <div className="user-course">
          {courses.map((course) => (
            <div className="course">
              <div className="course--detail">
                <div className="course--cover">{course.icon}</div>
                <div className="course--name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
