import React, { Component } from "react";
import { Button, Card, Dimmer, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import AnimatedModal from "../../plugins/AnimatedModal";

class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.state = { active: false, visible: false };
        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ active: true });
    }

    handleHide() {
        this.setState({ active: false });
    }

    render() {
        const { active } = this.state;

        const content = (
            <Button
                inverted
                color="grey"
                size="huge"
                primary
                as={AnimatedModal}
                modalTarget={this.props.modalTarget}
                animatedOut="bounceOut"
                modalColor="#F7F5F4">
                Learn more
            </Button>
        );

        var computerExtra = null;

        if (this.props.extra != null) {
            computerExtra = (
                <Card.Content extra>
                    <a href={this.props.extraLink} target="_blank">
                        <Icon name={this.props.extraIcon}/>
                        {this.props.extra}
                    </a>
                </Card.Content>
            );
        }

        var mobileExtra = (
            <p>
                <Icon name="hand pointer"/>
                Click me to learn more!
            </p>
        );

        if (this.props.mobile) {
            return(
                <Card
                    raised
                    link
                    href={this.props.modalTarget}
                    image={this.props.image}
                    header={this.props.header}
                    meta={this.props.meta}
                    description={this.props.description}
                    extra={mobileExtra}
                    as={AnimatedModal}
                    modalTarget={this.props.modalTarget}
                    animatedOut="bounceOut"
                    modalColor="#F7F5F4"/>
            );
        }
        else {
            return (
                <Card raised>
                    <Dimmer.Dimmable
                        as={Image}
                        blurring
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        src={this.props.image}/>
                    <Card.Content>
                        <Card.Header>
                            {this.props.header}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.meta}
                        </Card.Meta>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>
                    {computerExtra}
                </Card>
            );
        }
    }
}

ProjectCard.propTypes = {
    mobile: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modalTarget: PropTypes.string.isRequired,
    extra: PropTypes.string,
    extraLink: PropTypes.string,
    extraIcon: PropTypes.string
};

export default ProjectCard;