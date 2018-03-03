import React, { Component } from "react";
import { Card, Container, Header, Icon } from "semantic-ui-react";

class Projects extends Component {

    state = {projects: []}

    componentDidMount() {
        fetch("/json/projects")
        .then(res => res.json())
        .then(projects => this.setState({projects}));
    }

    renderCard(project, i) {
        var extra = null

        if (project.extra != null) {
            extra = (
                <a href={project.extraLink} target={project.header}>
                    <Icon name={project.extraIcon}/>
                    {project.extra}
                </a>
            )
        }

        return (
            <Card
            key={i}
            header={project.header}
            image={project.image}
            raised={true}
            meta={project.meta}
            description={project.description}
            extra={extra}
            />
        );
    }

    render() {
        return (
            <div className="projects" id="projects">
                <Container>
                    <Header>Projects</Header>
                    {/* TODO add dimmer to card image + button */}
                    <Card.Group itemsPerRow={3} centered textAlign="left">
                        {this.state.projects.map((project, i) => this.renderCard(project, i))}
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

export default Projects;