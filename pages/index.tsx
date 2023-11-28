import AboutSection from "@/components/sections/AboutSection";
import NameSection from "@/components/sections/NameSection";
import styles from "../styles/index.module.css";
import { useState, useEffect } from "react";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BottomBar from "@/components/UI/BottomBar";
import LikeButton from "@/components/UI/LikeButton";

const HomePage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  return (
    <>
      <LikeButton />
      <div className={styles.background} />

      <div
        className={styles.mobileShapesLeft}
        style={{ left: scrollPosition * 0.2 + "px" }}
      />
      <div
        className={styles.mobileShapesRight}
        style={{ left: "-" + scrollPosition * 0.2 + "px" }}
      />
      <NameSection />
      <div
        className={styles.topRight}
        style={{ left: scrollPosition * 0.5 + "px" }}
      />
      <AboutSection />
      <div
        className={styles.bottomLeft}
        style={{ left: "-" + scrollPosition * 0.5 + "px" }}
      />
      <ProjectsSection />
      <BottomBar />
    </>
  );
};

export default HomePage;
