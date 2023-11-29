import ProjectsData from "@/data/ProjectsData";

import styles from "../../styles/pages/ProjectPage.module.css";

const ProjectPage: React.FC = ({project}) => {
  return <div className={styles.ProjectPage}>{project.shortTitle}</div>;
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

export async function getStaticProps({params}) {
  return {
    props: {
      project: ProjectsData.filter((project)=>project.id === params.projectId)[0],
    },
  };
}

export default ProjectPage;
