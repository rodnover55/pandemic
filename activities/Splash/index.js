import React, {Component} from 'react';
import {Spinner, Container, Content} from 'native-base';
import * as game from '../../actions/GameActions';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';

const Splash = (props) => {
    if (props.games === null) {
        props.dispatch(game.fetch());
    } else {
        Actions.reset('games');
    }

    return (
        <Container>
            <Content>
                <Spinner />
            </Content>
        </Container>
    );
}

export default connect((state) => {
    return { games: state.games };
})(Splash);
