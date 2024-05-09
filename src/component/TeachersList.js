import React from "react";
import "./TeachersList.css";

const teachers = [
  {
    image: "/images/images1.png",
    name: "Prof Deepak",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Deepak",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Deepak",
    duration: "8 hours",
  },

  {
    image: "/images/images1.png",
    name: "Prof Deepak",
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
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
