import {AsyncStorage} from "react-native";
import moment from 'moment';

const fetch = async () => {
    const games = JSON.parse(await AsyncStorage.getItem('pandemic:games') || '[]');

    return games.map((game) => game.created_at != undefined ? {
        ...game,
        created_at: moment(game.created_at)
    }: game);
}

const saveItem = async (game) => {
    await AsyncStorage.setItem(`pandemic:games/${game.id}`, JSON.stringify(game));
}
const saveList = async (games) => {
    await AsyncStorage.setItem('pandemic:games', JSON.stringify(games));
}

export {fetch, saveItem, saveList};