import React, { Component } from "react";
import Obfuscate from "react-obfuscate";
import { Container, Icon, Menu} from "semantic-ui-react";
import PropTypes from "prop-types";

class IconSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: []
        };
    }

    componentDidMount() {
        fetch("/json/icons")
            .then(res => res.json())
            .then(icons => this.setState({icons}));
    }

    render() {
        if (this.props.isFooter) {
            return(
                <Container text className="icons">
                    {this.state.icons.map((icon, i) => this.renderFooterIcon(icon, i))}
                </Container>
            );
        } else {
            return(
                <Menu.Menu position="right">
                    {this.state.icons.map((icon, i) => this.renderMenuIcon(icon, i))}
                </Menu.Menu>
            );
        }
    }

    renderFooterIcon(icon, i) {
        if (icon.name==="mail") {
            return(
                <Obfuscate key={i} email={icon.link}>
                    <Icon key={i} color="teal" link name={icon.name} size="massive"/>
                </Obfuscate>
            );
        } else {
            return(
                <a key={i} href={icon.link} target={icon.name}>
                    <Icon key={i} color="teal" link name={icon.name} size="massive"/>
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
                <Menu.Item key={i} icon link href={icon.link} target={icon.name}>
                    <Icon key={i} name={icon.name} size="big"/>
                </Menu.Item>
            );
        }
    }
}

IconSet.propTypes = {
    isFooter: PropTypes.bool.isRequired
};

export default IconSet;