import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {about: []};
    }

    componentDidMount() {
        fetch("/json/about")
            .then(res => res.json())
            .then(about => this.setState({about}));
    }

    render() {
        return(
            <div id="myself">
                <Grid centered container>
                    <Grid.Column width={7} only="computer">
                    </Grid.Column>
                    <Grid.Column computer={9} mobile={16} tablet={11}>
                        <Header>Myself</Header>
                        {this.state.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default About;