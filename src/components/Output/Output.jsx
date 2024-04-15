import React from 'react'
import './output.css'

const Output = (props) => {
  return (
    <div className='output'>
        <div className="output__current-operand">
          {props.calculatorState.secondOperand === '' ?
            props.calculatorState.firstOperand : props.calculatorState.secondOperand}
          </div>
    </div>
  )
}

export default Output