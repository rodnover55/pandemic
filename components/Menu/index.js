import React from 'react';
import __ from '../../packages/translator';

import {
    Text, Container, Content, List, ListItem
} from 'native-base';

const Menu = () => (
    <Content style={{backgroundColor:'#FFFFFF'}}>
        <List>
            <ListItem button={true}>
                <Text>{__('game.new')}</Text>
            </ListItem>
            <ListItem button={true}>
                <Text>{__('exit')}</Text>
            </ListItem>
        </List>
    </Content>
);


export default Menu;