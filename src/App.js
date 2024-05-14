import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Profile from "./component/Profile";
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <BrowserRouter>
          <Routes>
            <Route path="profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
