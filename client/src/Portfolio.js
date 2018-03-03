import React, { Component } from "react";
import { Menu, Transition, Visibility } from "semantic-ui-react";
import MenuItems from "./MenuItems";
import Title from "./Title";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";

//TODO items parameter shorthand

class Portfolio extends Component {

    state = { visible: false }

    transitionMenuOut = () => this.setState({ visible: false })
    transitionMenuIn = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state
        return (
            <div>
                <Transition visible={visible} animation="fade down" duration={500}>
                    <Menu
                    fixed="top"
                    inverted
                    pointing
                    secondary
                    size="massive"
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
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;