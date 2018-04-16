import React, { Component } from "react";
import { Button, Card, Container, Grid, Header, List, Transition, Visibility } from "semantic-ui-react";
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
                <Grid relaxed padded centered>
                    <Grid.Row className="modal-header" columns={3}>
                        <Grid.Column width={3}/>
                        <Grid.Column width={10}>
                            <Header color="blue" size="huge">{project.header}</Header>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="right">
                            <Button icon="close" color="blue" circular className={"close-" + project.modalTarget}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="modal-content" columns={4}>
                        <Grid.Column width={3}/>
                        <Grid.Column width={3}>
                            <Header color="blue" size="large">What Was Used</Header>
                            <List items={project.modalSkills}/>
                            <Header color="blue" size="large">What For</Header>
                            <p>{project.modalProcess}</p>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                        <Grid.Column width={6}>
                            <Header size="medium">{project.modalSubheader}</Header>
                            <p>{project.modalDescription}</p>
                            <Header color="blue" size="large">See For Yourself</Header>
                            {project.modalButtons.map((button, i) => this.renderModalButton(button, i))}
                        </Grid.Column>
                        <Grid.Column width={3}/>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

    renderModalButton(button, i) {
        return (
            <Button key={i} href={button.link} icon={button.icon} content={button.name} size="large" color="grey" target="_blank"/>
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