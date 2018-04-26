import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import MenuItems from "../elements/MenuItems";

class Title extends Component {

    render() {
        return(
            <div id="home">
                <Menu
                    inverted
                    pointing
                    secondary
                    size="massive"
                    color="teal"
                    className="header-links">
                    <MenuItems isHeader={true}/>
                </Menu>
                <Container className="title-content">
                    <Header size="huge" color="teal">DANIEL LETSCHER</Header>
                    <Header size="large">Software Engineer</Header>
                </Container>
            </div>
        );
    }
}

export default Title;