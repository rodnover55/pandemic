import React from 'react';
import __ from '../../packages/translator';
import * as App from '../../actions/App';
import { Actions } from 'react-native-router-flux';

import {
    Text, Container, Content, List, ListItem, Body
} from 'native-base';

// TODO: Убрать логику из компонента.
const Menu = () => (
    <Content style={{backgroundColor:'#FFFFFF'}}>
        <List>
            <ListItem button={true} onPress={() => Actions.createGame()}>
                <Body>
                    <Text>{__('game.new')}</Text>
                </Body>
            </ListItem>
            <ListItem button={true} onPress={() => App.exit()}>
                <Body>
                    <Text>{__('exit')}</Text>
                </Body>
            </ListItem>
        </List>
    </Content>
);


export default Menu;