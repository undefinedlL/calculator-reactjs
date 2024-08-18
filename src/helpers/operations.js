export const addOperands = (operand_1, operand_2) => {
    if (operand_2 !== '') {
        return String(+operand_1 + +operand_2);
    } else {
        return operand_1;
    }
};

export const subtractOperands = (operand_1, operand_2) => {
    if (operand_2 !== '') {
        return String(+operand_1 - +operand_2);
    } else {
        return operand_1;
    }
};

export const multiplyOperands = (operand_1, operand_2) => {
    if (operand_2 !== '') {
        return String(+operand_1 * +operand_2);
    } else {
        return operand_1;
    }
};

export const divideOperands = (operand_1, operand_2) => {
    if (operand_1 !== '0' && operand_2 !== '0') {
        if (operand_2 !== '') {
            return String(+operand_1 / +operand_2);
        } else {
            return operand_1;
        }
    }
};

export const deleteOneSymbol = (state) => {
    if (state.secondOperand !== '') {
        return { ...state, secondOperand: state.secondOperand.slice(0, -1) };
    } else if (state.operator !== '') {
        return { ...state, operator: '' };
    } else if (state.firstOperand !== '0') {
        return { ...state, firstOperand: state.firstOperand.slice(0, -1) };
    } else {
        return { ...state };
    }
};
