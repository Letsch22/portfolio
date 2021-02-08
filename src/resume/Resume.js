import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ResumeSection from "./section/ResumeSection";
import ResumeContent from "./section/content/ResumeContent";
import SkillsContent from "./section/content/SkillsContent";
import StandardSectionsData from "./data/resume.json";
import SkillsSectionsData from "./data/skills.json";

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            standardSections: StandardSectionsData,
            skillsSections: SkillsSectionsData
        };
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
                <Grid columns={2} container relaxed padded centered divided="vertically" stackable>
                    {this.state.standardSections.map(section => this.renderStandardSection(section))}
                    {this.state.skillsSections.map(section => this.renderSkillsSection(section))}
                </Grid>
            </div>
        );
    }
}

export default Resume;