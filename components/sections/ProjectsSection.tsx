import styles from "../../styles/sections/ProjectsSection.module.css";
import ProjectItem from "../UI/ProjectItem";
import ProjectsData from "@/data/ProjectsData";
import Link from "next/link";

const ProjectsSection: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <p className={styles.heading}>Projects</p>
      <div className={styles.list}>
        {ProjectsData.map((projectItem) => (
          <ProjectItem
            key={projectItem.id}
            id={projectItem.id}
            title={projectItem.shortTitle}
            description={projectItem.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
