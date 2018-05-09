import React from 'react';
import {
    Text, Container, Content, List, ListItem, Header, Footer,
    Left, Body, Button, Icon, Drawer, Picker, Label, Input, Item
} from 'native-base';

import t from 'tcomb-form-native';

import __ from '../../packages/translator';

import * as game from '../../actions/GameActions';
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";

const Players = t.enums({
    1: __('game.form.players.1'),
    2: __('game.form.players.2'),
    3: __('game.form.players.3'),
    4: __('game.form.players.4')
});

const Game = t.struct({
    title: t.String,
    players: Players
});

const Form = t.form.Form;

class NewGame extends React.Component {
    createGame() {
        const value = this.refs.form.getValue();

        this.props.dispatch(game.create(value));
        Actions.pop();
    };

    render() {
        const options = {
            fields: {
                title: __('game.form.title'),
                players: __('game.form.players.label')
            }
        };

        const value = {
            players: 4
        }

        return (
            <Container>
                <Content>
                    <Form
                        ref="form"
                        type={Game}
                        options={options}
                        value={value}
                    />
                </Content>
                <Footer>
                    <Button onPress={() => this.createGame()}>
                        <Text>{__('game.create')}</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(NewGame);