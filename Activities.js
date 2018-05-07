import React from 'react';

import Splash from './activities/Splash';
import Games from './activities/Games';
import NewGame from './activities/NewGame';

import __ from './packages/translator';

import {Router, Stack, Scene, Reducer} from 'react-native-router-flux';
import {Text, View} from 'react-native'

const Activities = () => (
    <Router>
        <Stack key="root">
            <Scene key="splash" component={Splash} initial hideNavBar />
            <Scene key="games" component={Games} title={__('game.list')} hideNavBar/>
            <Scene key="createGame" component={NewGame} title={__('game.new')} hideNavBar/>
        </Stack>
    </Router>
)

export default Activities;