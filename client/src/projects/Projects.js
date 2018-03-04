import React, { Component } from "react";
import { Card, Container, Header, Transition, Visibility } from "semantic-ui-react";
import Project from "./project/Project";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { projects: [], visible: false };
        this.flipCards = this.flipCards.bind(this);
    }

    flipCards() {
        this.setState({ visible: true });
    }

    componentDidMount() {
        fetch("/json/projects")
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    renderProject(project, i) {
        return (
            <Project
                key={i}
                header={project.header}
                image={project.image}
                meta={project.meta}
                description={project.description}
                extra={project.extra}
                extraIcon={project.extraIcon}
                extraLink={project.extraLink}
            />
        );
    }

    render() {
        return (
            <div id="projects">
                <Container>
                    <Header>Projects</Header>
                    <Visibility onBottomVisible={this.flipCards} once>
                        <Transition animation="vertical flip" visible={this.state.visible} mountOnShow={false} duration={750}>
                            <Card.Group itemsPerRow={3} centered textAlign="left">
                                {this.state.projects.map((project, i) => this.renderProject(project, i))}
                            </Card.Group>
                        </Transition>
                    </Visibility>
                </Container>
            </div>
        );
    }
}

export default Projects;