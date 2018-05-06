import React, {Component} from 'react';
import {Text, Container, Content, List, ListItem, Header, Left, Body, Button, Icon} from 'native-base';
import { connect } from 'react-redux';
import * as game from '../../actions/GameActions';

const Games = (props) => {
    const Items = props.games.map((game) => (
        <ListItem key={game.id}>
            <Text>{game.id}</Text>
        </ListItem>
    ));

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body />
            </Header>
            <Content>
                <List>{Items}</List>
            </Content>
        </Container>
    );
}

export default connect((state) => {
    return { games: state.games };
})(Games);
