import React from 'react';
import {
    Text, Container, Content, List, ListItem, Header,
    Left, Body, Button, Icon, Drawer, Picker, Label, Input, Form, Item
} from 'native-base';

import __ from '../../packages/translator';

const NewGame = () => {
    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>{__('game.form.title')}</Label>
                        <Input />
                    </Item>
                    <Picker
                        mode="dropdown"
                        placeholder={__('game.form.players.label-')}
                        selectedValue={null}
                    >
                        <Picker.Item label={__("game.form.players.1")} value={1} />
                        <Picker.Item label={__("game.form.players.2")} value={2} />
                        <Picker.Item label={__("game.form.players.3")} value={3} />
                        <Picker.Item label={__("game.form.players.4")} value={4} />
                    </Picker>
                </Form>
            </Content>
        </Container>
    );
}

export default NewGame;