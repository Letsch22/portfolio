import React, { Component } from "react";
import { Grid, Header, List, Segment, Sticky } from "semantic-ui-react";
import PropTypes from "prop-types";

class StandardResumeSection extends Component {

    render() {
        return(
            <Grid.Row>
                <Grid.Column width={5}>
                    <Sticky context={this.state}>
                        <Segment basic className="resume-header">
                            <Header size="huge">{this.props.name}</Header>
                        </Segment>
                    </Sticky>
                </Grid.Column>
                <Grid.Column width={11}>
                    {this.props.segments.map((segment, i) => this.renderSegment(segment, i))}
                </Grid.Column>
            </Grid.Row>
        )
    }

    renderSegment(segment, index) {
        return(
            <Segment key={index} basic>
                <Header size="huge">{segment.title}</Header>
                {segment.lists.map((list, i) => this.renderList(list, i))}
            </Segment>
        );
    }

    renderList(list, index) {
        var listitems = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].isitalics) {
                listitems.push(<List.Item key={i}><i>{list[i].content}</i></List.Item>);
            }
            else {
                listitems.push(<List.Item key={i}>{list[i].content}</List.Item>);
            }
        }
        return(<List key={index} bulleted horizontal>{listitems}</List>);
    }
}

StandardResumeSection.propTypes = {
    name: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default StandardResumeSection;