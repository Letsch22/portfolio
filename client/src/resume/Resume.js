import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ResumeSection from "./section/ResumeSection";
import ResumeContent from "./section/content/ResumeContent";
import SkillsContent from "./section/content/SkillsContent";

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            standardSections: [],
            skillsSections: []
        };
    }

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
            <ResumeSection
                key={section.id}
                name={section.name}
                segments={section.segments}>
                <ResumeContent/>
            </ResumeSection>

        );
    }

    renderSkillsSection(section) {
        return (
            <ResumeSection
                key={section.id}
                name={section.name}
                segments={section.segments}>
                <SkillsContent/>
            </ResumeSection>
        );
    }

    render() {
        return(
            <div id="resume">
                <Grid columns={2} container relaxed padded centered divided="vertically">
                    {this.state.standardSections.map(section => this.renderStandardSection(section))}
                    {this.state.skillsSections.map(section => this.renderSkillsSection(section))}
                </Grid>
            </div>
        );
    }
}

export default Resume;