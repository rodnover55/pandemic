import { combineReducers } from 'redux'
import games from './games'
import { handleActions, combineActions } from 'redux-actions';

export default combineReducers({
    games: games
});