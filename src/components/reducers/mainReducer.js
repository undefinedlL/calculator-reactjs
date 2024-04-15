import {
    subtractOperands,
    addOperands,
    multiplyOperands,
    divideOperands,
    deleteOneSymbol,
} from "../../helpers/operations";

export const mainReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            const res = addOperands(state.firstOperand, state.secondOperand);
            return { firstOperand: res, secondOperand: '', operator: action.next_operator, result: true};
        }
        case "subtract": {
            const res = subtractOperands(
                state.firstOperand,
                state.secondOperand
            );
            return { ...state, firstOperand: res, secondOperand: '', result: true};
        }
        case "multiply": {
            const res = multiplyOperands(
                state.firstOperand,
                state.secondOperand
            );
            return { ...state, firstOperand: res, secondOperand: '', result: true };
        }
        case "divide": {
            const res = divideOperands(
                state.firstOperand,
                state.secondOperand
            );
            return { ...state, firstOperand: res, secondOperand: '', result: true };
        }
        case "add_number": {
            if (state.operator === "" ) {
                if (!state.result) {
                    return {
                        ...state,
                        firstOperand: state.firstOperand + action.value,
                    };
                } 
                return {
                    ...state,
                    firstOperand: action.value,
                    result: false
                }
            } else {
                return {
                    ...state,
                    secondOperand: state.secondOperand + action.value,
                };
            }
        }
        case "add_operator": {
            return { ...state, operator: action.valueOperator, result: false };
        }
        case "delete_operator": {
                return {...state, operator: '', result: true}
        } 
        case "clear": {
            return { firstOperand: "0", secondOperand: "", operator: "", result: true };
        }
        case "return_firstOperand": {
            return { ...state, operator: "" };
        }
        case "delete_symbol": {
            return deleteOneSymbol(state);
        }
        default: {
            console.log("ERORRRRR!!!!!");
            return { ...state };
        }
    }
};
