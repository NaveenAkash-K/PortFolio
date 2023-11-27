import AboutPage from "@/components/sections/AboutPage";
import NamePage from "@/components/sections/NamePage";
import styles from "../styles/index.module.css";
import { useState, useEffect } from "react";
import ProjectsPage from "@/components/sections/ProjectsPage";
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
      <NamePage />
      <div
        className={styles.topRight}
        style={{ left: scrollPosition * 0.5 + "px" }}
      />
      <AboutPage />
      <div
        className={styles.bottomLeft}
        style={{ left: "-" + scrollPosition * 0.5 + "px" }}
      />
      <ProjectsPage />
      <BottomBar />
    </>
  );
};

export default HomePage;
