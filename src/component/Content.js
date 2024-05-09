import React from "react";
import "./Content.css";
import ContentHeader from "../ContentHeader";

import TeachersList from "./TeachersList";
const Content = () => {
  return (
    <div className="content">
      <ContentHeader />
      <TeachersList />
    </div>
  );
};

export default Content;
