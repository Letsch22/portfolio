import React, { Component } from "react";
import { Button, Grid, Header, List } from "semantic-ui-react";
import PropTypes from "prop-types";

class ProjectModal extends Component {

    renderButton(button, i) {
        return (
            <Button key={i} href={button.link} icon={button.icon} content={button.name} size="large" color="grey" target="_blank"/>
        );
    }

    render() {
        return (
            <div id={this.props.target} className="custom-modal">
                <Grid padded centered doubling>
                    <Grid.Row className="modal-header" columns={3}>
                        <Grid.Column computer={3} only="tablet computer"/>
                        <Grid.Column computer={10} mobile={13} tablet={10}>
                            <Header color="blue" size="huge">{this.props.header}</Header>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="right">
                            <Button icon="close" color="blue" circular className={"close-" + this.props.target}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="modal-content stackable" columns={4}>
                        <Grid.Column width={3} only="tablet computer"/>
                        <Grid.Column computer={3} mobile={3} tablet={4}>
                            <Header color="blue" size="large">What Was Used</Header>
                            <List items={this.props.skills}/>
                            <Header color="blue" size="large">What For</Header>
                            <p>{this.props.whatFor}</p>
                        </Grid.Column>
                        <Grid.Column width={1} only="computer"/>
                        <Grid.Column width={6}>
                            <Header color="blue" size="medium">{this.props.subheader}</Header>
                            {this.props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                            <Header color="blue" size="large">See For Yourself</Header>
                            {this.props.buttons.map((button, i) => this.renderButton(button, i))}
                        </Grid.Column>
                        <Grid.Column width={3} only="tablet computer"/>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

ProjectModal.propTypes = {
    target: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    whatFor: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectModal;