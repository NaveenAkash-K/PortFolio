import styles from "../../styles/sections/ProjectsSection.module.css";
import ProjectItem from "../UI/ProjectItem";
import { ProjectsList } from "@/model/ProjectsData";
import Link from "next/link";

const ProjectsSection: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <p className={styles.heading}>Projects</p>
      <div className={styles.list}>
        {ProjectsList.map((projectItem, index) => (
          <Link href={projectItem.id} key={index} className={styles.projectLink}>
            <ProjectItem
              key={projectItem.id}
              id={projectItem.id}
              title={projectItem.title}
              description={projectItem.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
