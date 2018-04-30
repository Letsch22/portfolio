import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import { Menu } from "semantic-ui-react";
import IconSet from "./IconSet";
import PropTypes from "prop-types";

class MenuItems extends Component {

    constructor(props) {
        super(props);
        this.state = { items: ["home", "myself", "resume", "projects"] };
    }

    renderItem(name, i) {
        return(<Menu.Item key={i} link href={"#"+name}>{name.toUpperCase()}</Menu.Item>);
    }

    render() {
        if (this.props.hasIcons) {
            return(
                <Scrollspy items={this.state.items} offset={-50} currentClassName="active" componentTag="div" className={this.props.className}>
                    {this.state.items.map((item, i) => this.renderItem(item, i))}
                    <IconSet isFooter={false}/>
                </Scrollspy>
            );
        } else {
            return(
                <Scrollspy items={this.state.items} offset={-50} currentClassName="active" componentTag="div" className={this.props.className}>
                    {this.state.items.map((item, i) => this.renderItem(item, i))}
                </Scrollspy>
            );
        }
    }
}

MenuItems.propTypes = {
    hasIcons: PropTypes.bool.isRequired,
    className: PropTypes.string
};

export default MenuItems;