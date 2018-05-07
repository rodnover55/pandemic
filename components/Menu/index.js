import React from 'react';
import __ from '../../packages/translator';
import * as App from '../../actions/App';
import { Actions } from 'react-native-router-flux';

import {
    Text, Container, Content, List, ListItem
} from 'native-base';

// TODO: Убрать логику из компонента.
const Menu = () => (
    <Content style={{backgroundColor:'#FFFFFF'}}>
        <List>
            <ListItem button={true} onPress={() => Actions.createGame()}>
                <Text>{__('game.new')}</Text>
            </ListItem>
            <ListItem button={true} onPress={() => App.exit()}>
                <Text>{__('exit')}</Text>
            </ListItem>
        </List>
    </Content>
);


export default Menu;