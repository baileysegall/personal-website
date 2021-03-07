import "./Projects.css";
import React from 'react';

const Projects = ({project}) => {
  return(
    <div className='cont'>
      <div className='first'>
        <div className="title">
          <h1>{project.fields.Name}</h1>
        </div>
        <div>
          <img className="logo" src={project.fields.Attachments}/>
        </div>
        <div className="me">
          <h3 className='role'>{project.fields.Role}</h3>
          <p className="skills">{project.fields.Skills}</p>
        </div>
      </div>

      <div className="second">
        <p className='fullAbout'>{project.fields.fullAbout}</p>
      </div>
    </div>
    
  );
}

export default Projects;
