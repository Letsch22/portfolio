import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class About extends Component {
    render() {
        return(
            <div id="myself">
                <Grid centered>
                    <Grid.Column width={6}>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header>Myself</Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam elit sed tortor volutpat mattis. Nam ac massa eu est aliquam vehicula vitae ac tortor. Ut commodo turpis venenatis tristique consequat. Aliquam dui eros, consectetur sed hendrerit ut, congue at nibh. Aenean sit amet efficitur mi, sit amet porttitor eros. Nulla facilisi. Aenean ac pretium metus. Donec sem ligula, vestibulum vel velit sed, tristique porta leo.</p>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default About;