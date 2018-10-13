const defaultState = {inputValue:0,result:0,previousInputValue:0,selectedSymbol:null };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SETINPUT':
            return Object.assign({}, state, {
                inputValue:action.inputValue
            });
        case 'CALCULATEINPUT':
            return Object.assign({}, state, {
                inputValue:action.inputValue,
                selectedSymbol:action.selectedSymbol,
                previousInputValue:action.previousInputValue,
               
            });
        case 'RESULT':
            return Object.assign({}, state, {
                inputValue:action.inputValue,
                selectedSymbol:action.selectedSymbol,
                previousInputValue:action.previousInputValue,
            });
      
        default:
            return state;
    }
}