import React, { useReducer } from 'react'
import Output from '../Output/Output'
import KeyPad from '../Keypad/Keypad'
import { mainReducer } from '../reducers/mainReducer';
import './calculator.css'

const Calculator = () => {
  const [calculatorState, dispatch] = useReducer(mainReducer, {firstOperand: '', secondOperand: '', operator: '', result: false});
  console.log(calculatorState)
  return (
    <div className="calculator">
        <Output calculatorState={calculatorState} />
        <KeyPad dispatch={dispatch} calculatorState={calculatorState}/>
    </div>
  )
}

export default Calculator