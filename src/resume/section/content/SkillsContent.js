import React, { Component } from "react";
import { Label, List, Popup } from "semantic-ui-react";
import PropTypes from "prop-types";

class SkillsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderText(list, i) {
        var listItems = [];
        for (var j = 0; j < list.length; j++) {
            listItems.push(<Label key={j}>{list[j].content}</Label>);
        }
        return(<Label.Group key={i} size="large">{listItems}</Label.Group>);
    }

    renderIcons(list, i) {
        var listItems = [];
        for (var j = 0; j < list.length; j++) {
            listItems.push(<Popup
                key={j}
                trigger={<List.Item as="i" key={j} className={list[j].content}></List.Item>}
                content={list[j].caption}
                on="hover"
                inverted
                position="top center"
                verticalOffset={-20}/>);
        }
        return(
            <List key={i} size="massive" horizontal className="devicons">
                {listItems}
            </List>
        );
    }

    render() {

        if (this.props.isText) {
            return (this.props.lists.map((list, i) => this.renderText(list,i)));
        }
        else {
            return (this.props.lists.map((list, i) => this.renderIcons(list, i)));
        }
    }
}

SkillsContent.propTypes = {
    isText: PropTypes.bool,
    lists: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
};

export default SkillsContent;