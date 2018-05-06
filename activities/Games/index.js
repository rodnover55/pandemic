import React, {Component} from 'react';
import {Text, Container, Content, List, ListItem} from 'native-base';
import { connect } from 'react-redux';
import * as game from '../../actions/GameActions';

const Games = (props) => {
    const Items = props.games.map((game) => (
        <ListItem>
            <Text>{game.id}</Text>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <List>{Items}</List>
            </Content>
        </Container>
    );
}

export default connect((state) => {
    return { games: state.games };
})(Games);
