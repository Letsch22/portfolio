import React, { Component } from "react";
import { List } from "semantic-ui-react";
import PropTypes from "prop-types";

class ResumeContent extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    renderList(list, i) {
        var listItems = [];
        for (var j = 0; j < list.length; j++) {
            if (list[j].isItalics) {
                listItems.push(<List.Item key={j}><i>{list[j].content}</i></List.Item>);
            }
            else {
                listItems.push(<List.Item key={j}>{list[j].content}</List.Item>);
            }
        }
        return(<List key={i} bulleted horizontal>{listItems}</List>);
    }

    render() {
        return (this.props.lists.map((list, i) => this.renderList(list, i)));
    }
}

ResumeContent.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
};

export default ResumeContent;