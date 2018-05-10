import React, {Component} from 'react';

import {
    Text, Container, Content, List, ListItem, Header,
    Left, Body, Button, Icon, Drawer, Right
} from 'native-base';

import Menu from '../../components/Menu';

import { connect } from 'react-redux';
import * as game from '../../actions/GameActions';

const Games = (props) => {
    console.log(props.games);
    const Items = props.games.map((game) => (
        <ListItem key={game.id}>
            <Body>
                <Text>{game.title}</Text>
            </Body>
            <Right>
                <Text note>{game.created_at ? game.created_at.format('D.MM.YY') : ''}</Text>
            </Right>
        </ListItem>
    ));

    // TODO: Сделать Drawer как лейат для активити
    return (
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<Menu />}
            onClose={() => this.drawer._root.close()}
        >
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => {
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
