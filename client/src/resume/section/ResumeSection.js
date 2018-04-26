import React, { Component } from "react";
import { Grid, Header, Segment, Sticky } from "semantic-ui-react";
import PropTypes from "prop-types";

class ResumeSection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleContextRef = this.handleContextRef.bind(this);
    }

    handleContextRef(contextRef) {
        this.setState({ contextRef });
    }

    render() {
        const { contextRef } = this.state;

        return(
            <div ref={this.handleContextRef} className="row">
                <Grid.Column width={5} only="computer">
                    <Sticky context={contextRef} offset={60}>
                        <Segment basic className="resume-header">
                            <Header size="huge" color="blue">{this.props.name}</Header>
                        </Segment>
                    </Sticky>
                </Grid.Column>
                <Grid.Column width={12} only="mobile" textAlign="center">
                    <Segment basic className="resume-header">
                        <Header size="huge" color="blue">{this.props.name}</Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column computer={11} mobile={12}>
                    {this.props.segments.map((segment, i) => this.renderSegment(segment, i))}
                </Grid.Column>
            </div>
        );
    }

    renderSegment(segment, index) {
        return(
            <Segment key={index} basic>
                <Header size="huge">{segment.title}</Header>
                <p><i>{segment.subtitle}</i></p>
                {React.cloneElement(this.props.children, { lists: segment.lists, body: segment.body, isText: segment.isText })}
            </Segment>
        );
    }
}

ResumeSection.propTypes = {
    name: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.object.isRequired
};

export default ResumeSection;