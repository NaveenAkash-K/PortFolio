import React, { useEffect } from "react";
import NameOverlay from "./components/name-overlay/NameOverlay";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Cube from "./components/cube/Cube";
import TopRight from "./components/top-right/TopRight";
import BottomLeft from "./components/right-bottom/BottomLeft";
import BottomBar from "./components/bottomBar/BottomBar";
import Projects from "./components/projects/Projects";
import Background from "./components/background/Background";
import MobilePatternLeft from "./components/mobilePattern-left/MobilePatternLeft";
import MobilePatternRight from "./components/mobilePattern-Right/MobilePatternRight";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document
        .querySelector(".topRight")
        .classList.toggle("scrolled", scrollPosition > 0);

      document
        .querySelector(".mobilePatternRight")
        .classList.toggle("scrolled", scrollPosition > 0);

      document
        .querySelector(".mobilePatternLeft")
        .classList.toggle("scrolled", scrollPosition > 0);

      document
        .querySelector(".bottomLeft")
        .classList.toggle("scrolled", scrollPosition > 0);
      // Add similar logic for other components

    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="main" id="home">
        <Background />
        <MobilePatternLeft />
        <MobilePatternRight />
        <Cube />
        <BottomLeft />
        <NameOverlay />
        <TopRight />
      </div>
      <AboutMe id="about" />
      <Projects id="projects" />
      <BottomBar/>
      {/* <p className="desktop-view">View in desktop for better experience</p> */}
    </>
  );
}

export default App;
