import React, { useState, useEffect } from "react";
import NameOverlay from "./components/name-overlay/NameOverlay";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Cube from "./components/cube/Cube";
import TopRight from "./components/top-right/TopRight";
import BottomLeft from "./components/right-bottom/BottomLeft";
import BottomBar from "./components/bottomBar/BottomBar";
import Projects from "./components/projects/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

        document
    .querySelector(".topRight")
    .classList.toggle("scrolled", scrollPosition > 0);
  document
    .querySelector(".bottomLeft")
    .classList.toggle("scrolled", scrollPosition > 0);
  // Add similar logic for other components

      if (scrollPosition < AboutMe.offsetTop) {
        setActiveSection("home");
      } else if (scrollPosition < Projects.offsetTop) {
        setActiveSection("about");
      } else {
        setActiveSection("projects");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main" id="home">
        <Cube />
        <BottomLeft />
        <NameOverlay />
        <TopRight />
      </div>
      <AboutMe id="about" />
      <Projects id="projects" />
      <BottomBar
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
      />
    </>
  );
}

export default App;
