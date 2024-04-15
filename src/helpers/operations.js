export const addOperands = (operand_1, operand_2) => {
    let result = '';
    if (operand_2 !== '') {
        result = String(Number(operand_1) + Number(operand_2)); 
    } else {
        result = operand_1;
    }   
    return (result.length < 10 ? result : String(Number(result).toFixed(2)))  

}

export const subtractOperands = (operand_1, operand_2) =>  {
    let result = '';
    if (operand_2 !== '') {
        result = String(Number(operand_1) - Number(operand_2)); 
        return (result.length < 10 ? result : String(Number(result).toFixed(2)))  
    } else {
        return operand_1
    }

}

export const multiplyOperands = (operand_1, operand_2) => {
    let result = '';
    if (operand_2 !== '') {
        result = String(Number(operand_1) * Number(operand_2)); 
        return (result.length < 10 ? result : String(Number(result).toFixed(2)))
    } else {
        return operand_1;
    }   

}

export const divideOperands = (operand_1, operand_2) => {
    let result = '';
    if (operand_1 !== '0' && operand_2 !== '0') {
        if (operand_2 !== '') {
            result = String(Number(operand_1) / Number(operand_2));
            return (result.length < 10 ? result : String(Number(result).toFixed(2)));
        } else {
            return operand_1;
        }
    }   
}

export const deleteOneSymbol = (state) => {
    if (state.secondOperand !== '') {
        return {...state, secondOperand: state.secondOperand.slice(0, -1)};
    } else if (state.operator !== '') {
        return {...state, operator: ''};
    } else if (state.firstOperand !== '0') {
        return {...state, firstOperand: state.firstOperand.slice(0, -1)};
    } else {
        return {...state};
    }
}