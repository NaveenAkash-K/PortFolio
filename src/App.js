import React from "react";
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
import AnimatedCursor from "react-animated-cursor";

function App() {
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
  };
  window.addEventListener("scroll", handleScroll);
  const width = window.innerWidth;
  return (
    <>
      {width > 770 ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={0}
          outerScale={3}
          outerStyle={{
            mixBlendMode: "difference",
            backgroundColor: "white",
          }}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
        />
      ) : null}

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
      <BottomBar />
      {/* <p className="desktop-view">View in desktop for better experience</p> */}
    </>
  );
}

export default App;
