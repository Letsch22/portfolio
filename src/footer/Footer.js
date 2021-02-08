import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-scroll";
import IconSet from "../elements/IconSet";

class Footer extends Component {

    render() {
        return(
            <div className="footer">
                <Link to="home" spy={false} smooth={true} duration={500}>
                    <Button color="grey" icon circular size="huge" className="home-button">
                        <Icon size="large" name="arrow up"/>
                    </Button>
                </Link>
                <Container textAlign="center">
                    <Header>Thanks for visiting</Header>
                    <IconSet isFooter={true}/>
                </Container>
            </div>
        );
    }
}

export default Footer;