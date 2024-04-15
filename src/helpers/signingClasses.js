import { checkValueType } from "./buttonOnClickHandlers";

export const signClassFotButton = (value) => {
    const valueType = checkValueType(value);
    switch (valueType) {
        case 'operator' :
            return 'operator'
        case 'number': 
            return 'number'
        case 'clear-button': 
            return 'clear-button'
        case 'del-button': 
            return 'del-button'
        case 'equal-button': 
            return 'equal-button'
        default: 
            return ''
    }
}

export const signActiveClass = (value, pickedOperator) => pickedOperator === value ? ' --active': '';