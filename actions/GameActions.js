import { createAction } from 'redux-actions';


const fetch = createAction('GAMES/FETCH', async () => {
    // TODO: Симулируем долгую загрузку. Удалить после получения реальных данных
    await new Promise((r) => setTimeout(r, 1000));

    return [
        {
            id: 'game_1'
        }
    ];
});

export {fetch};