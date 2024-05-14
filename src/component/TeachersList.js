import React from "react";
import "./TeachersList.css";
import { Link } from "react-router-dom";
const teachers = [
  {
    image: "/images/images1.png",
    name: "Prof Deepak",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Suyash",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Anuj",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Tanya",
    duration: "8 hours",
  },
];

const TeachersList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
      </div>
      <div className="list--container">
        {teachers.map((teacher) => (
          <div className="list">
            <div className="teacher--detail">
              <img src={teacher.image} alt={teacher.name} />
              {/* <a href="/profile">{teacher.name}</a> */}
              <Link to="/profile" activeClassName="current">
                {teacher.name}
              </Link>
            </div>
            <span>{teacher.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
