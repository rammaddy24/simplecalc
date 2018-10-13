const defaultState = {result:0 };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADDITION':
            return Object.assign({}, state, {
                result:0
            });
        case 'SUBTRACTION':
            return Object.assign({}, state, {
                result:0
            });
        case 'MULTIPLICATION':
            return Object.assign({}, state, {
                result:0
            });
        case 'DIVISION':
        return Object.assign({}, state, {
            result:0
        });
        case 'OUTPUT':
        return Object.assign({}, state, {
            result:0
        });

        default:
            return state;
    }
}