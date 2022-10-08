export const addCounter = (counter) => {
    return ({
        type: 'ADD_TO_COUNTER',
        payload: counter,
    });
};

export const removeCounter = (counter) => {
    return ({
        type: 'REMOVE_TO_COUNTER',
        payload: counter,
    });
};