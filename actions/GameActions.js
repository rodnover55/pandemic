import { createAction } from 'redux-actions';


const fetch = createAction('GAMES/FETCH', async () => {
    return [
        {
            id: 'game_1'
        }
    ];
});

export {fetch};