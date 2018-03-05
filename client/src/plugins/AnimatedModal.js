import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

require("./animatedModal.min");

// React wrapper component for http://joaopereirawd.github.io/animatedModal.js/
class AnimatedModal extends Component {

    componentDidMount() {
        $(this.node).animatedModal({
            modalTarget: this.props.modalTarget,
            color: this.props.color,
            animatedIn: this.props.animatedIn,
            animatedOut: this.props.animatedOut,
            animationDuration: this.props.animationDuration,
            overflow: this.props.overflow
        });
    }

    // TODO componentWillUnmount

    render() {
        return(
            <a href={"#" + this.props.modalTarget} ref={node => this.node = node}>
                {this.props.children}
            </a>
        );
    }
}

AnimatedModal.propTypes = {
    modalTarget: PropTypes.string,
    color: PropTypes.string,
    animatedIn: PropTypes.string,
    animatedOut: PropTypes.string,
    animationDuration: PropTypes.string,
    overflow: PropTypes.oneOf(["scroll", "hidden", "auto"]),
    children: PropTypes.node
};

AnimatedModal.defaultProps = {
    modalTarget: "animatedModal",
    color: "#39BEB9",
    animatedIn: "zoomIn",
    animatedOut: "zoomOut",
    animationDuration: ".6s",
    overflow: "auto"
};

export default AnimatedModal;