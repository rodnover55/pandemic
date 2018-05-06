import { handleActions } from 'redux-actions';
import * as game from '../actions/GameActions';

const initialState = null;

export default handleActions({
    [game.fetch](state = initialState, action) {
        return action.payload;
    }
}, null);