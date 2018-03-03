import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import IconSet from "./IconSet";

class Footer extends Component {

    render() {
        return(
            <div className="footer">
                <Button color="grey" icon circular size="huge" href="#home"><Icon size="large" name="arrow up"/></Button>
                <Container textAlign="center">
                    <Header>Thanks for visiting!</Header>
                    <IconSet isFooter={true}/>
                </Container>
            </div>
        );
    }
}

export default Footer;