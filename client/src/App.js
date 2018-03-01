import React, { Component } from "react";
import Scrollspy from 'react-scrollspy'
import { Card, Container, Grid, Header, Icon, Label, List, Menu, Popup, Segment, Sticky, Transition, Visibility } from 'semantic-ui-react';

//TODO items parameter shorthand

class App extends Component {

    state = { visible: false }

    transitionMenuOut = () => this.setState({ visible: false })
    transitionMenuIn = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state
        return (
            <div className="App">
                <Transition visible={visible} animation="fade down" duration={500}>
                    <Menu
                    fixed="top"
                    inverted
                    pointing
                    secondary
                    size='massive'
                    color="teal"
                    className="menu-header"
                    >
                        <MenuItems isHeader={false}/>
                    </Menu>
                </Transition>
                <Visibility once={false} offset={[10, 10]} onBottomPassed={this.transitionMenuIn} onBottomPassedReverse={this.transitionMenuOut}>
                    <Title/>
                </Visibility>
                <About/>
                <Resume/>
                <Projects/>
                {/* TODO: footer */}
            </div>
        );
    }
}

class MenuItems extends Component {
    items = ["home", "myself", "resume", "projects"];
    icons = [{name: "linkedin", link:"https://www.linkedin.com/in/dpletscher/"}, {name: "github", link: "https://github.com/Letsch22"}]

    render() {
        return(
            <Scrollspy items={this.items} currentClassName="active" componentTag="div" className="ui menu-items container">
                {this.items.map((item, i) => this.renderItem(item, i))}
                <Menu.Menu position="right">
                    {this.icons.map((icon, i) => this.renderIcon(icon, i))}
                </Menu.Menu>
            </Scrollspy>
        )
    }

    renderItem(name, i) {
        return(<Menu.Item key={i} link href={"#"+name}>{name.toUpperCase()}</Menu.Item>)
    }

    renderIcon(icon, i) {
        if (this.props.isHeader){
            return(
                <Menu.Item key={i} icon link href={icon.link} target={icon.name}><Icon key={i} name={icon.name} size="big"/></Menu.Item>
            )
        }

    }
}

class Title extends Component {
    render() {
        return(
            <div className="App-header" id="home">
                <Menu
                inverted
                pointing
                secondary
                size='massive'
                color="teal"
                className="header-links"
                >

                    <MenuItems isHeader={true}/>
                </Menu>
                <div className="title-content">
                    <Header size="huge">DANIEL LETSCHER</Header>
                    <Header size="large">Software Engineer</Header>
                </div>
            </div>

        )
    }
}

class About extends Component {
    render() {
        return(
            <div className="myself" id="myself">
                <Grid centered>
                    <Grid.Column width={6}>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header>Myself</Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam elit sed tortor volutpat mattis. Nam ac massa eu est aliquam vehicula vitae ac tortor. Ut commodo turpis venenatis tristique consequat. Aliquam dui eros, consectetur sed hendrerit ut, congue at nibh. Aenean sit amet efficitur mi, sit amet porttitor eros. Nulla facilisi. Aenean ac pretium metus. Donec sem ligula, vestibulum vel velit sed, tristique porta leo.</p>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

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
                <div className="resume" id="resume">
                    <Grid columns={2} container relaxed padded centered divided="vertically">
                        {this.state.standardSections.map((section, i) => this.renderStandardSection(section))}
                        {this.state.skillsSections.map((section, i) => this.renderSkillsSection(section))}
                    </Grid>
                </div>
        )
    }
}

// TODO refactor this as compositition
class SkillsResumeSection extends Component {
    render() {
        return(
            <Grid.Row>
                <Grid.Column width={5}>
                    <Segment basic className="resume-header">
                        <Header>{this.props.name}</Header>
                    </Segment>
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
                    verticalOffset={-20}/>)
            }
            return(<List size="massive" horizontal key={index} className="devicons">{listitems}</List>);
        }
    }
}

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
        )
    }

    renderList(list, index) {
        var listitems = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].isitalics) {
                listitems.push(<List.Item key={i}><i>{list[i].content}</i></List.Item>);
            }
            else {
                listitems.push(<List.Item key={i}>{list[i].content}</List.Item>)
            }
        }
        return(<List key={index} bulleted horizontal>{listitems}</List>);
    }
}

class Projects extends Component {

    state = {projects: []}

    componentDidMount() {
        fetch("/json/projects")
        .then(res => res.json())
        .then(projects => this.setState({projects}));
    }

    renderCard(project, i) {
        var extra = null

        if (project.extra != null) {
            extra = (
                <a href={project.extraLink} target={project.header}>
                    <Icon name={project.extraIcon}/>
                    {project.extra}
                </a>
            )
        }

        return (
            <Card
            key={i}
            header={project.header}
            image={project.image}
            raised={true}
            meta={project.meta}
            description={project.description}
            extra={extra}
            />
        );
    }

    render() {
        return (
            <div className="projects" id="projects">
                <Container>
                    <Header>Projects</Header>
                    {/* TODO add dimmer to card image + button */}
                    <Card.Group itemsPerRow={3} centered textAlign="left">
                        {this.state.projects.map((project, i) => this.renderCard(project, i))}
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

export default App;
