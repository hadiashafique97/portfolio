import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle, faLinkedin, faOpenid } from "@fortawesome/free-brands-svg-icons"
import { projects } from "../../Components/data";
import './Project.css'
import { useState } from "react"

const Project = () => {
 
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-tile animate__animated animate__rotateIn"  title="Scroll down to view entire project">
          <h2 className="project-title">{project.title}</h2>
          <hr></hr>
          <h3 className="project-subtitle">{project.subtitle}</h3>
          <p className="project-description">{project.description}</p>
          <img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)}className="project-image" />
          <div className="logo">
            <a href={project.link} >
              <FontAwesomeIcon className="project-logo" icon={faGoogle} size="2x"/>
            </a>
            <a href={project.github} >
              <FontAwesomeIcon className="github-logo" icon={faGithub} size="2x" />
            </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Project;