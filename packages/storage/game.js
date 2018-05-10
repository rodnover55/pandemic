import {AsyncStorage} from "react-native";
import moment from 'moment';

const fetch = async () => {
    const games = JSON.parse(await AsyncStorage.getItem('pandemic:games') || '[]');

    return games.map((game) => game.created_at != undefined ? {
        ...game,
        created_at: moment(game.created_at)
    }: game);
}

const saveList = async (games) => {
    return await AsyncStorage.setItem('pandemic:games', JSON.stringify(games));
}

const saveItem = async (game) => {
    return await AsyncStorage.setItem(getItemKey(game), JSON.stringify(game));
}

const removeItem = async (game) => {
    return await AsyncStorage.removeItem(getItemKey(game));
}

const getItemKey = (game) => `pandemic:games/${game.id}`

export {fetch, saveItem, removeItem, saveList};