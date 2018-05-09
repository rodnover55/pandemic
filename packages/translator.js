import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    en: {
        'game': {
            'new': 'New Game',
            'list': 'Games',
            'create': 'Create',
            'form': {
                'title': 'Title',
                'players': {
                    'label': 'Players count',
                    '1': '1 player',
                    '2': '2 players',
                    '3': '3 players',
                    '4': '4 players'
                }
            }
        },
        'exit': 'Exit'
    },
    ru: {
        'game': {
            'new': 'Новая игра',
            'list': 'Список игр',
            'create': 'Создать игру',
            'form': {
                'title': 'Название игры',
                'players': {
                    'label': 'Количество игроков',
                    '1': '1 игрок',
                    '2': '2 игрока',
                    '3': '3 игрока',
                    '4': '4 игрока'
                }
            }
        },
        'exit': 'Выход'
    },
};


export default function (str) {
    return I18n.t(str);
};