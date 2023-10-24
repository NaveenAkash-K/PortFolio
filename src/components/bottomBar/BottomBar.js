import React from "react";
import { Link } from "react-scroll";
import "./bottomBar.css";
import SocialButton from "../socialButton/SocialButton";

function BottomBar() {
  return (
    <div className="bottomBar">
      <nav>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0} // Adjust the offset if needed
          duration={500}
          className="nav-link"
        >
          HOME
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50} // Adjust the offset if needed
          duration={500}
          className="nav-link"
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50} // Adjust the offset if needed
          duration={500}
          className="nav-link"
        >
          PROJECTS
        </Link>
      </nav>
      <div className="social-button_div">
        <SocialButton></SocialButton>
      </div>
    </div>
  );
}

export default BottomBar;
