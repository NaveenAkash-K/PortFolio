import "./projectItem.css";

function ProjectItem(props) {
  return (
    <a style={{textDecoration:"none", color:"black", height: "min-content"}} href={props.link}>
    <div className="projectItem">
      <h1 className="projectName">{props.title}</h1>
      <p className="projectDescription">{props.description}</p>
      <h3 className="skills_heading">Skills</h3>
      <div className="skills">
        {props.skills.map((skill) => (
          <h4>{skill}</h4>
        ))}
      </div>
    </div>

    </a>
  );
}

export default ProjectItem;
