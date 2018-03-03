import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import StandardResumeSection from "./StandardResumeSection";
import SkillsResumeSection from "./SkillsResumeSection";

class Resume extends Component {

    state = {standardSections: [], skillsSections: []}

    componentDidMount() {
        fetch("/json/resume")
        .then(res => res.json())
        .then(standardSections => this.setState({standardSections}));
        fetch("/json/skills")
        .then(res => res.json())
        .then(skillsSections => this.setState({skillsSections}));
    }

    renderStandardSection(section) {
        return (
            <StandardResumeSection
            key={section.id}
            name={section.name}
            segments={section.segments}
            />
        );
    }

    renderSkillsSection(section) {
        return (
            <SkillsResumeSection
            key={section.id}
            name={section.name}
            segments={section.segments}
            />
        );
    }

    render() {
        return(
            <div id="resume">
                <Grid columns={2} container relaxed padded centered divided="vertically">
                    {this.state.standardSections.map((section, i) => this.renderStandardSection(section))}
                    {this.state.skillsSections.map((section, i) => this.renderSkillsSection(section))}
                </Grid>
            </div>
        )
    }
}

export default Resume;