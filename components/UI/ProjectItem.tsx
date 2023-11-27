import styles from "../../styles/ProjectItem.module.css";

const ProjectItem: React.FC<{
  id: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
}> = (props) => {
  return (
    <a
      style={{ textDecoration: "none", color: "black", height: "min-content" }}
      href={props.link}
    >
      <div className={styles.project}>
        <h1 className={styles.name}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <h3 className={styles.skills_heading}>Skills</h3>
        <div className={styles.skills}>
          {props.skills.map((skill) => (
            <h4 key={skill}>{skill}</h4>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
