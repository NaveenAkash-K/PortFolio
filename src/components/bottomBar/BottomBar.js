// BottomBar.js
import React from "react";
import "./bottomBar.css";
import SocialButton from "../socialButton/SocialButton";

function BottomBar() {
  return (
    <div className="bottomBar">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <a href="#home" className="nav-link">
          HOME
        </a>
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <a href="#projects" className="nav-link">
          PROJECTS
        </a>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <SocialButton></SocialButton>
      </div>
    </div>
  );
}

export default BottomBar;
