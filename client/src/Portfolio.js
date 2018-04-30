import React, { Component } from "react";
import { Menu, Responsive, Transition, Visibility } from "semantic-ui-react";
import MenuItems from "./elements/MenuItems";
import Title from "./title/Title";
import About from "./about/About";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false,
            sidebarVisible: false
        };
        this.transitionMenuIn = this.transitionMenuIn.bind(this);
        this.transitionMenuOut = this.transitionMenuOut.bind(this);
        this.transitionSidebarIn = this.transitionSidebarIn.bind(this);
        this.transitionSidebarOut = this.transitionSidebarOut.bind(this);
    }

    transitionMenuOut() {
        this.setState({ menuVisible: false });
    }
    transitionMenuIn() {
        this.setState({ menuVisible: true });
    }

    transitionSidebarOut() {
        this.setState({ sidebarVisible: false });
    }
    transitionSidebarIn() {
        this.setState({ sidebarVisible: true });
    }

    render() {
        return (
            <div>
                <Responsive as={Transition}
                    minWidth={768}
                    visible={this.state.menuVisible}
                    animation="fade down">
                    <Menu
                        fixed="top"
                        inverted
                        pointing
                        secondary
                        size="massive"
                        color="teal"
                        className="menu-header">
                        <MenuItems hasIcons={false} className="ui container"/>
                    </Menu>
                </Responsive>
                <Responsive as={Menu}
                    maxWidth={767}
                    minWidth={372}
                    compact
                    fixed="top"
                    inverted
                    pointing
                    secondary
                    size="massive"
                    color="teal"
                    className="menu-header">
                    <MenuItems hasIcons={false} className="ui container centered grid mobile-menu-grid"/>
                </Responsive>
                <Responsive as={Menu}
                    maxWidth={371}
                    compact
                    fixed="top"
                    inverted
                    pointing
                    secondary
                    size="large"
                    color="teal"
                    className="menu-header">
                    <MenuItems hasIcons={false} className="ui container centered grid mobile-menu-grid"/>
                </Responsive>
                <Visibility
                    once={false}
                    offset={[10, 10]}
                    onBottomPassed={this.transitionMenuIn}
                    onBottomPassedReverse={this.transitionMenuOut}>
                    <Title/>
                </Visibility>
                <About/>
                <Resume/>
                <Projects/>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;