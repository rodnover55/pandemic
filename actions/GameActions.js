import { createAction } from 'redux-actions';
import {AsyncStorage} from 'react-native'
import * as gameStorage from '../packages/storage/game'
import _ from 'lodash';
import uuid from 'react-native-uuid';
import * as thunk from '../packages/actions/thunk';
import moment from 'moment';


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
            created_at: moment(),
            ...game
        };

        await Promise.all(
            gameStorage.saveItem(game),
            gameStorage.saveList([...games, _.pick(game, ['id', 'title', 'players', 'created_at', 'version'])])
        );

        dispatch(fetch());
    })
);

const remove = thunk.make(
    createAction('GAMES/DELETE', async (dispatch, getStore, game) => {
        const { games } = getStore();

        await Promise.all(
            gameStorage.removeItem(game),
            gameStorage.saveList(games.filter((g) => game.id !== g.id))
        );

        dispatch(fetch());
    })
);

const generateId = (game) => uuid.v4();

export {fetch, create, remove};