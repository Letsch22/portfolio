import React, { Component } from "react";
import { Card, Container, Header, Responsive, Transition, Visibility } from "semantic-ui-react";
import ProjectCard from "./project/ProjectCard";
import ProjectModal from "./project/ProjectModal";

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

    renderCard(project, i, isMobile) {
        return (
            <ProjectCard
                key={i}
                header={project.header}
                image={project.image}
                meta={project.meta}
                description={project.description}
                modalTarget={project.modalTarget}
                extra={project.extra}
                extraIcon={project.extraIcon}
                extraLink={project.extraLink}
                mobile={isMobile}/>
        );
    }
    renderModal(project, i) {
        return (
            <ProjectModal
                key={i}
                target={project.modalTarget}
                header={project.header}
                skills={project.modalSkills}
                whatFor={project.modalWhatFor}
                subheader={project.modalSubheader}
                description={project.modalDescription}
                buttons={project.modalButtons}/>
        );
    }

    render() {
        return (
            <div id="projects">
                <Container>
                    <Visibility onBottomVisible={this.flipCards} once>
                        <Header>Projects</Header>
                    </Visibility>
                    <Transition animation="vertical flip" visible={this.state.visible} mountOnShow={false} duration={750}>
                        <Responsive {...Responsive.onlyComputer} as={Card.Group} itemsPerRow={3} centered textAlign="left" stackable>
                            {this.state.projects.map((project, i) => this.renderCard(project, i, false))}
                        </Responsive>
                    </Transition>
                    <Transition animation="vertical flip" visible={this.state.visible} mountOnShow={false} duration={750}>
                        <Responsive maxWidth={991} as={Card.Group} itemsPerRow={3} centered textAlign="left" stackable>
                            {this.state.projects.map((project, i) => this.renderCard(project, i, true))}
                        </Responsive>
                    </Transition>
                    {this.state.projects.map((project, i) => this.renderModal(project, i))}
                </Container>
            </div>
        );
    }
}

export default Projects;