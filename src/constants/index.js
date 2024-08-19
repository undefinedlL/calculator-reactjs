export const KeypadButtonValues = [
    ['C', 'D', '/'],
    ['1', '2', '3', '*'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['0', '.', '='],
];

export const valueTypes = {
    '-': 'operator',
    '+': 'operator',
    '*': 'operator',
    '/': 'operator',
    C: 'clear-button',
    D: 'del-button',
    '=': 'equal-button',
    '.': 'number',
};
Array.from({ length: 10 }, (_, i) => i.toString()).forEach((num) => {
    valueTypes[num] = 'number';
});

export const operatorClass = 'operator';
export const ActiveClass = '--active';
