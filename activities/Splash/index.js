import React, {Component} from 'react';
import {Spinner, Container, Content} from 'native-base';
import * as game from '../../actions/GameActions';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
    componentDidMount() {
        this.props.dispatch(game.fetch());
    }
    componentWillReceiveProps(props) {
        if (props.games !== null) {
            Actions.reset('games');
        }
    }

    render () {
        return (
            <Container>
                <Content>
                    <Spinner/>
                </Content>
            </Container>
        );
    }
}

export default connect((state) => {
    return { games: state.games };
})(Splash);
