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
        if (this.props.body == null) {
            return(this.props.lists.map((list, i) => this.renderList(list, i)));
        }
        else
        {
            return (
                <div>
                    {this.props.lists.map((list, i) => this.renderList(list, i))}
                    <List className="body" bulleted items={this.props.body}></List>
                </div>
            );
        }
    }
}

ResumeContent.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    body: PropTypes.arrayOf(PropTypes.string)
};

export default ResumeContent;