// // ProjectList.js
// import React, { useState } from 'react';
// import './projectsList.css'; // Replace with your actual stylesheet

// const ProjectsList = () => {
//   const projects = [
//     { id: 1, title: 'Project 1', description: 'Description for Project 1' },
//     { id: 2, title: 'Project 2', description: 'Description for Project 2' },
//     { id: 3, title: 'Project 3', description: 'Description for Project 3' },
//     // Add more projects as needed
//   ];

//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleProjectHover = (projectId) => {
//     setSelectedProject(projectId);
//   };

//   return (
//     <div className="project-container">
//       <div className="project-list">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className={`project-item ${selectedProject === project.id ? 'hovered' : ''}`}
//             onMouseEnter={() => handleProjectHover(project.id)}
//             onMouseLeave={() => handleProjectHover(null)}
//           >
//             {"- " + project.title}
//           </div>
//         ))}
//       </div>
//       <div className="project-details">
//         {selectedProject !== null && (
//           <div className="details-content">
//             <h1>{projects[selectedProject - 1].title}</h1>
//             <p>{projects[selectedProject - 1].description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectsList;

import "./projectsList.css"; // Replace with your actual stylesheet
import ProjectItem from "../projectItem/ProjectItem";
const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      description:
        "sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs",
      skills: ["CSS", "HTML", "Flutter", "Flutter", "Flutter", "Flutter"],
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs",
      skills: ["CSS", "HTML", "Flutter", "Flutter", "Flutter", "Flutter"],
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs",
      skills: ["CSS", "HTML", "Flutter", "Flutter", "Flutter", "Flutter"],
    },
    {
      id: 4,
      title: "Expense Tracker",
      description:
        "sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs",
      skills: ["CSS", "HTML", "Flutter", "Flutter", "Flutter", "Flutter"],
    },
    {
      id: 5,
      title: "Expense Tracker",
      description:
        "sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs sfdvs",
      skills: ["CSS", "HTML", "Flutter", "Flutter", "Flutter", "Flutter"],
    },
    // Add more projects as needed
  ];

  return (
    <div className="projectsList">
      {projects.map((projectItem) => (
        <ProjectItem
          key={projectItem.id}
          title={projectItem.title}
          description={projectItem.description}
          skills={projectItem.skills}
        />
      ))}
    </div>
  );
};
export default ProjectsList;
