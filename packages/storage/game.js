import {AsyncStorage} from "react-native";

const fetch = async () => {
    const games = await AsyncStorage.getItem('pandemic:games');

    return games != null ? JSON.parse(games) : [];
}

const saveItem = (game) => {
    console.log('Save item', game);
}
const saveList = async (games) => {
    await AsyncStorage.setItem('pandemic:games', JSON.stringify(games));
}

export {fetch, saveItem, saveList};