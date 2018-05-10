import { createAction } from 'redux-actions';
import {AsyncStorage} from 'react-native'
import * as gameStorage from '../packages/storage/game'
import _ from 'lodash';
import uuid from 'react-native-uuid';
import * as thunk from '../packages/actions/thunk';


const fetch = createAction('GAMES/FETCH', async () => {
    try {
        return await gameStorage.fetch();
    } catch (e) {
        console.log('Cannot load games', e)

        return [];
    }
});

const create = thunk.make(
    createAction('GAMES/CREATE', async (dispatch, getStore, game) => {
        const { games } = getStore();

        game = {
            id: generateId(game),
            ...game
        };

        await Promise.all(
            gameStorage.saveItem(game),
            gameStorage.saveList([...games, _.pick(game, ['id', 'title', 'players'])])
        );

        dispatch(fetch());
    })
);

const generateId = (game) => uuid.v4();

export {fetch, create};