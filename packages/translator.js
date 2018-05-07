import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    en: {
        'game': {
            'new': 'New Game'
        },
        'exit': 'Exit'
    },
    ru: {
        'game': {
            'new': 'Новая игра'
        },
        'exit': 'Выход'
    },
};


export default function (str) {
    return I18n.t(str);
};