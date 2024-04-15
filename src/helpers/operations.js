export const addOperands = (operand_1, operand_2) => operand_2 !== '' ? String(Number(operand_1) + Number(operand_2)) : operand_1;

export const subtractOperands = (operand_1, operand_2) => operand_2 !== '' ? String(Number(operand_1) - Number(operand_2)) : operand_1;

export const multiplyOperands = (operand_1, operand_2) => operand_2 !== '' ? String(Number(operand_1) * Number(operand_2)) : operand_1;

export const divideOperands = (operand_1, operand_2) => {
    if (operand_1 !== '0' && operand_2 !== '0') {
        return operand_2 !== '' ? String(Number(operand_1) / Number(operand_2)) : operand_1
    } else {
        console.log('You can\'t divide by zero')
    }
};

export const deleteOneSymbol = (state) => {
    if (state.secondOperand !== '') {
        return {...state, secondOperand: state.secondOperand.slice(0, -1)};
    } else if (state.operator !== '') {
        return {...state, operator: ''};
    } else if (state.firstOperand !== '') {
        return {...state, firstOperand: state.firstOperand.slice(0, -1)};
    } else {
        return {...state};
    }
}