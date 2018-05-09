const make = (action) => function () {
    const thunkedAction = (dispatch, getStore) => action.apply(undefined, [dispatch, getStore, ...arguments]);

    thunkedAction.toString = action.toString;

    return thunkedAction;
};

export {make};