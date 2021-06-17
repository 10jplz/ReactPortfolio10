import React, { Component } from "react";
import ProjectCard from "./assets/ProjectCard";
import Wrapper from "./assets/Wrapper";
import Title from "./assets/Title";
import projects from "./assets/projects.json";
import Container from "react-bootstrap/Container";

class Portfolio extends Component {
  // Setting this.state.friends to the project json array
  state = {
    projects
  };


  // Map over this.state.friends and render a Project Card component for each project object
  render() {
    return (
      <Container>
        <Wrapper>
        <Title>Project List</Title>
        {this.state.projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            location={project.location}
            applink={project.applink}
            gitrepo={project.gitrepo}
          />
        ))}
      </Wrapper>
      </Container>

    );
  }
}

export default Portfolio;
