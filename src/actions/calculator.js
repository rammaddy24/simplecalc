export const setinput = (data) => {
    return (dispatch) => {    
        dispatch({ inputValue: data.inputValue, type: 'SETINPUT' });
    };
};
export const calculateinput = (data) => {
    return (dispatch) => {    
        dispatch({ inputValue: data.inputValue,selectedSymbol: data.selectedSymbol,
            previousInputValue:data.previousInputValue, type: 'CALCULATEINPUT' });
    };

};    
export const result = (data) => {
    return (dispatch) => {    
        dispatch({ inputValue: data.inputValue,selectedSymbol: data.selectedSymbol,
            previousInputValue:data.previousInputValue, type: 'RESULT' });
    };

}; 
