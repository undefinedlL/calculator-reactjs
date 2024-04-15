// check types to buttons that the Keypad component includes in
export const checkValueType = (value) => {
    switch (value) {
        case "-":
        case "+":
        case "*":
        case "/": {
            return "operator";
        }
        case "C":
        case "D": {
            return value === "C" ? "clear-button" : "del-button";
        }
        case "=": {
            return "equal-button";
        }
        default: {
            return "number";
        }
    }
};


// all buttons have a defined type (which checkValueType function returns)
// and on depend of a type button the next functions will be called
// for 'number'
export const onClickButtonWithNumber = (value, dispatch, firstOperand, secondOperand, operator) => {
    if (firstOperand === '' && value === '.' || secondOperand === '' && value === '.') {
        dispatch({
            type: "add_number",
            value: `0${value}`,
        })
    } else if ((value === '.' && secondOperand === '' && operator !== '') || (value === '.' && firstOperand === '')) {
        dispatch({
            type: "add_number",
            value: `0${value}`,
        });
    } else {
        dispatch({
            type: "add_number",
            value: value,
        });
    }
    
};

// for 'operator'
export const onClickButtonWithOperator = (
    value,
    dispatch,
    firstOperand,
    secondOperand,
    operator
) => {
    if (firstOperand === "") {
        value === "-" && dispatch({ type: "add_number", value: value });
    } else if (value !== "=" && secondOperand === "" && firstOperand !== '-') {
        dispatch({
            type: "add_operator",
            valueOperator: value,
        });
    } else if (value === '=') {
        // get a result
        getResult(dispatch, operator);
        dispatch({
            type: "delete_operator"
        })
    } else if (firstOperand !== '-') {
        getResultWithNext(value, dispatch, operator)
    }
};

// clear all values of the state
export const clearButton = (dispatch) => {
    dispatch({
        type: "clear",
    });
};


export const onClickDeleteSymbolButton = (dispatch) => {
    dispatch({
        type: 'delete_symbol'
    })
}

export const onClickEqualButton = (dispatch, operator, secondOperand) => {
    if (operator !== '' && secondOperand !== '') {
        getResult(dispatch, operator)
    } else {
        dispatch({
            type: 'return_firstOperand'
        })
    }
}

const getResultWithNext = (value, dispatch, operator) => {
    getResult(dispatch, operator);
    dispatch({
        type: "add_operator",
        valueOperator: value
    })
}

const getResult = (dispatch, operator) => {
    // this function checks the entered operator
    // and calls dispatch function with a suitable action type
    switch (operator) {
        case "+": {
            dispatch({
                type: "add",
            });
            break;
        }
        case "-": {
            dispatch({
                type: "subtract",
            });
            break;
        }
        case "/": {
            dispatch({
                type: "divide"
            });
            break;
        }
        case "*": {
            dispatch({
                type: "multiply",
            });
            break;
        }
        default: {
            break;
        }
    }
};

