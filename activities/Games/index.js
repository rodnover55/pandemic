import React, {Component} from 'react';

import { ListView } from 'react-native';

import {
    Text, Container, Content, List, ListItem, Header,
    Left, Body, Button, Icon, Drawer, Right
} from 'native-base';

import Menu from '../../components/Menu';

import { connect } from 'react-redux';
import * as games from '../../actions/GameActions';

const Games = (props) => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const Item = ({game}) => (
        <ListItem key={game.id}>
            <Body>
                <Text>{game.title}</Text>
            </Body>
            <Right>
                <Text note>{game.created_at ? game.created_at.format('D.MM.YY') : ''}</Text>
            </Right>
        </ListItem>
    );

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
                <List
                    dataSource={ds.cloneWithRows(props.games)}
                    renderRow={game => <Item game={game}/>}
                    renderRightHiddenRow={(game, secId, rowId, rowMap) => (
                        <Button full danger onPress={() => {
                            props.dispatch(games.remove(game));
                            rowMap[`${secId}${rowId}`].props.closeRow();
                        }}>
                            <Icon active name="trash" />
                        </Button>
                    )}
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                />
            </Content>
        </Container>
        </Drawer>
    );
}

export default connect((state) => {
    return { games: state.games };
})(Games);
