import React, {Component} from 'react';

import {
    Text, Container, Content, List, ListItem, Header,
    Left, Body, Button, Icon, Drawer
} from 'native-base';

import { connect } from 'react-redux';
import * as game from '../../actions/GameActions';

const Games = (props) => {
    const Items = props.games.map((game) => (
        <ListItem key={game.id}>
            <Text>{game.id}</Text>
        </ListItem>
    ));



    return (
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<Content style={{backgroundColor:'#FFFFFF'}}><Text>test</Text></Content>}
            onClose={() => this.drawer._root.close()}
        >
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => {
                            console.log('test');
                            this.drawer._root.open();
                        }}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body />
            </Header>
            <Content>
                <List>{Items}</List>
            </Content>
        </Container>
        </Drawer>
    );
}

export default connect((state) => {
    return { games: state.games };
})(Games);
