import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <a href={props.applink} target="blank">Live Link</a>
          </li>
          <li>
            <a href={props.gitrepo} target="blank">Git Repo</a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default ProjectCard;
