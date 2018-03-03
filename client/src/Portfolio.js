import React, { Component } from "react";
import { Menu, Transition, Visibility } from "semantic-ui-react";
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
            visible: false
        };
        this.transitionMenuIn = this.transitionMenuIn.bind(this);
        this.transitionMenuOut = this.transitionMenuOut.bind(this);
    }

    transitionMenuOut() {
        this.setState({ visible: false });
    }
    transitionMenuIn() {
        this.setState({ visible: true });
    }

    render() {
        return (
            <div>
                <Transition visible={this.state.visible} animation="fade down">
                    <Menu
                        fixed="top"
                        inverted
                        pointing
                        secondary
                        size="massive"
                        color="teal"
                        className="menu-header">
                        <MenuItems isHeader={false}/>
                    </Menu>
                </Transition>
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