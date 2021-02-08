import React, { Component } from "react";
import Obfuscate from "react-obfuscate";
import { Container, Icon, Menu, Responsive} from "semantic-ui-react";
import PropTypes from "prop-types";
import IconData from "./data/icons.json";

class IconSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: IconData
        };
    }

    render() {
        if (this.props.isFooter) {
            return(
                <Container text className={this.props.className + " icons"}>
                    {this.state.icons.map((icon, i) => this.renderFooterIcon(icon, i))}
                </Container>
            );
        } else {
            return(
                <Menu.Menu position="right" className={this.props.className}>
                    {this.state.icons.map((icon, i) => this.renderMenuIcon(icon, i))}
                </Menu.Menu>
            );
        }
    }

    renderFooterIcon(icon, i) {
        if (icon.name==="mail") {
            return(
                <Obfuscate key={i} email={icon.link}>
                    <Responsive minWidth={351} as={Icon} key={i} color="teal" link name={icon.name} size="massive"/>
                    <Responsive maxWidth={350} as={Icon} key={i + this.state.icons.size} color="teal" link name={icon.name} size="huge"/>
                </Obfuscate>
            );
        } else {
            return(
                <a key={i} href={icon.link} target="_blank">
                    <Responsive minWidth={351} as={Icon} key={i} color="teal" link name={icon.name} size="massive"/>
                    <Responsive maxWidth={350} as={Icon} key={i + this.state.icons.size} color="teal" link name={icon.name} size="huge"/>
                </a>
            );
        }
    }

    renderMenuIcon(icon, i) {
        if (icon.name==="mail") {
            return(
                <Obfuscate key={i} email={icon.link} className="icon link item">
                    <Icon key={i} name={icon.name} size="big"/>
                </Obfuscate>
            );
        } else {
            return(
                <Menu.Item key={i} icon link href={icon.link} target="_blank">
                    <Icon key={i} name={icon.name} size="big"/>
                </Menu.Item>
            );
        }
    }
}

IconSet.propTypes = {
    isFooter: PropTypes.bool.isRequired,
    className: PropTypes.string
};

export default IconSet;