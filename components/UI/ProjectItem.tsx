import styles from "../../styles/UI/ProjectItem.module.css";

const ProjectItem: React.FC<{
  id: string;
  title: string;
  description: string;
}> = (props) => {
  return (
    <div
      style={{ textDecoration: "none", color: "black", height: "min-content" }}
    >
      <div className={styles.project}>
        <h1 className={styles.name}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <br />
        <p style={{ textDecorationLine: "underline", color:"white", mixBlendMode:"difference" }}>
          Click for more details.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
