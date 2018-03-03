import React, { Component } from "react";
import { Grid, Header, Label, List, Popup, Segment, Sticky } from "semantic-ui-react";
import PropTypes from "prop-types";

// TODO refactor this as compositition
class SkillsResumeSection extends Component {

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
                <Grid.Column width={5}>
                    <Sticky context={contextRef} offset={60}>
                        <Segment basic className="resume-header">
                            <Header size="huge">{this.props.name}</Header>
                        </Segment>
                    </Sticky>
                </Grid.Column>
                <Grid.Column width={11}>
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
                {segment.lists.map((list, i) => this.renderList(list, segment.istext, i))}
            </Segment>
        )
    }

    renderList(list, istext, index) {
        var listitems = [];
        if (istext) {
            for (var i = 0; i < list.length; i++) {
                listitems.push(<Label key={i}>{list[i].content}</Label>)
            }
            return(<Label.Group key={index} size="large">{listitems}</Label.Group>);
        }
        else {
            for (var j = 0; j < list.length; j++) {
                listitems.push(<Popup
                    key={j}
                    trigger={<List.Item as="i" key={j} className={list[j].content}></List.Item>}
                    content={list[j].caption}
                    on="hover"
                    inverted
                    position="top center"
                    verticalOffset={-20}/>);
            }
            return(<List size="massive" horizontal key={index} className="devicons">{listitems}</List>);
        }
    }
}

SkillsResumeSection.propTypes = {
    name: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default SkillsResumeSection;