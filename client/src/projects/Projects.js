import React, { Component } from "react";
import { Button, Card, Container, Grid, Header, Transition, Visibility } from "semantic-ui-react";
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
                modalTarget={project.modalTarget}
                extra={project.extra}
                extraIcon={project.extraIcon}
                extraLink={project.extraLink}
            />
        );
    }
    renderModal(project, i) {
        return (
            <div key={i} id={project.modalTarget} className="custom-modal">
                <Grid columns={4} relaxed padded centered>
                    <Grid.Column size={2}/>
                    <Grid.Column size={7}>
                        <Header color="blue" size="huge">{project.header}</Header>
                    </Grid.Column>
                    <Grid.Column size={7}/>
                    <Grid.Column size={2} textAlign="right">
                        <Button icon="close" color="blue" circular className={"close-" + project.modalTarget}/>
                    </Grid.Column>
                </Grid>
            </div>
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
                {this.state.projects.map((project, i) => this.renderModal(project, i))}
            </div>
        );
    }
}

export default Projects;