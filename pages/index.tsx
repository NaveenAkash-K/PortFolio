import AboutSection from "@/components/sections/AboutSection";
import NameSection from "@/components/sections/NameSection";
import styles from "../styles/pages/HomePage.module.css";
import { useState, useEffect, useMemo, useCallback } from "react";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BottomBar from "@/components/UI/BottomBar";
import LikeButton from "@/components/UI/LikeButton";
import SkillsSection from "@/components/sections/SkillsSection";

const HomePage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);
  return (
    <div className={styles.HomePage}>
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
        style={{ left: scrollPosition * 0.7 + "px" }}
      />
      <AboutSection />
      <div
        className={styles.bottomLeft}
        style={{ left: "-" + scrollPosition * 0.7 + "px" }}
      />

      {useMemo(() => {
        return (
          <>
            <LikeButton />
            <SkillsSection />
            <ProjectsSection />
            <BottomBar reduced={false} />
          </>
        );
      }, [])}
    </div>
  );
};

export default HomePage;