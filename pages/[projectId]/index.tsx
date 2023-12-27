import { ProjectsData } from "@/model/ProjectsData";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/pages/ProjectPage.module.css";
import BottomBar from "@/components/UI/BottomBar";
import githubImage from "@/assets/images/GitHub_white.png";
import { useEffect, useState } from "react";
import LikeButton from "@/components/UI/LikeButton";

const ProjectPage: React.FC<{
  project: {
    id: string;
    title: string;
    overview: string;
    skills: {
      name: string;
      image: StaticImageData;
      largeImage: number;
      smallImage: number;
    }[];
    keyFeatures: [string, string][];
    githubLink: string;
    screenshots: {
      image: StaticImageData;
      largeImage: number;
      smallImage: number;
    }[];
  };
}> = ({ project }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);
  useEffect(() => {
    if (window.innerWidth < 770) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 770) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    });
  }, []);
  return (
    <>
      <center>
        <div className={styles.ProjectPage}>
          <h1 className={styles.title}>{project.title}</h1>
          <a href={project.githubLink} className={styles.githubButton}>
            <Image src={githubImage} alt="github" width={30} />
            <p style={{ fontSize: "small" }}>
              Check it on <br />
              <span style={{ letterSpacing: "5px" }}>GITHUB</span>
            </p>
          </a>
          <br />
          <div className={styles.overviewSection}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </div>
          <br />
          <div className={styles.keyFeaturesSection}>
            <h2>Key Features</h2>
            <ol>
              {project.keyFeatures.map((keyFeature, index) => (
                <li key={index}>
                  <strong>{keyFeature[0]}: </strong>
                  {keyFeature[1]}
                </li>
              ))}
            </ol>
          </div>
          <br />
          <div className={styles.skillsSection}>
            <h2>Skills / Technology used: </h2>
            <center>
              <div className={styles.skillsGrid}>
                {project.skills.map((skill, index) => (
                  <div className={styles.skill} key={index}>
                    <div className={styles.skillBackground}></div>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={
                        isSmallScreen ? skill.smallImage : skill.largeImage
                      }
                      className={styles.skillImage}
                    />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </center>
          </div>
          <br />
          <div className={styles.screenshotsSection}>
            <h2>Screenshots</h2>
            <div className={styles.screenshotsGrid}>
              {project.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot.image}
                  alt="screenshot"
                  width={
                    isSmallScreen
                      ? screenshot.smallImage
                      : screenshot.largeImage
                  }
                  className={styles.screenshotImage}
                />
              ))}
            </div>
          </div>
        </div>
      </center>
      <BottomBar reduced={true} />
      <LikeButton />
    </>
  );
};

export async function getStaticPaths() {
  const paths = ProjectsData.map((project) => ({
    params: { projectId: project.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (data: {
  params: { projectId: string };
}) => {
  return {
    props: {
      project: ProjectsData.filter(
        (project) => project.id === data.params.projectId
      )[0],
    },
  };
};

export default ProjectPage;
