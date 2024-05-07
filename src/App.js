import React, { Profiler } from "react";
import './App.css';
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Profile from "./component/Profile";
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <Profile />
      </div>
    </div>
  );
}

export default App;
