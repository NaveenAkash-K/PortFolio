import styles from "../../styles/UI/ProjectItem.module.css";

const ProjectItem: React.FC<{
  id: string;
  title: string;
  description: string;
}> = (props) => {
  return (
      <div className={styles.project}>
        <h1 className={styles.name}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <br />
        <p
          style={{
            textDecorationLine: "underline",
            color: "white",
            mixBlendMode: "difference",
          }}
        >
          {/* Dive Deeper. */}
        </p>
      </div>
  );
};

export default ProjectItem;
