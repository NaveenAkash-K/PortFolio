import './projects.css'
import ProjectsList from '../projectsList/ProjectsList';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <p className='projects_heading'>Projects</p>
      <ProjectsList/>
    </div>
  );
}

export default Projects;