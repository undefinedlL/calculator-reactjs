import { useReducer } from 'react';
import Output from '../Output/Output';
import KeyPad from '../Keypad/Keypad';
import { mainReducer } from '../reducers/mainReducer';
import './calculator.css';

const Calculator = () => {
    const [calculatorState, dispatch] = useReducer(mainReducer, {
        firstOperand: '0',
        secondOperand: '',
        operator: '',
        result: true,
    });
    return (
        <div className="calculator">
            <Output calculatorState={calculatorState} />
            <KeyPad dispatch={dispatch} calculatorState={calculatorState} />
        </div>
    );
};

export default Calculator;
