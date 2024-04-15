import React, { useState } from "react";
import { KeypadButtonValues } from "../../constants";
import "./keypad.css";
import {
    checkValueType,
    onClickButtonWithNumber,
    onClickButtonWithOperator,
    clearButton,
    onClickDeleteSymbolButton,
} from "../../helpers/buttonOnClickHandlers";
import {
    signActiveClass,
    signClassFotButton,
} from "../../helpers/signingClasses";

const KeyPad = ({ dispatch, calculatorState }) => {
    const [activeOperator, setActiveOperator] = useState("");

    const getFunction = (value, dispatch) => {
        const typeButton = checkValueType(value);
        switch (typeButton) {
            case "number": {
                onClickButtonWithNumber(
                    value,
                    dispatch,
                    calculatorState.firstOperand,
                    calculatorState.secondOperand,
                    calculatorState.operator
                );
                break;
            }
            case "operator":
            case "equal-button": {
                onClickButtonWithOperator(
                    value,
                    dispatch,
                    calculatorState.firstOperand,
                    calculatorState.secondOperand,
                    calculatorState.operator
                );
                break;
            }
            case "del-button": {
                onClickDeleteSymbolButton(dispatch);
                break;
            }
            case "clear-button": {
                clearButton(dispatch);
                break;
            }
            default: {
                break;
            }
        }
    };

    return (
        <div className="keypad">
            {KeypadButtonValues.flat().map((value, index) => (
                <button
                    key={index}
                    id={index}
                    data-type={checkValueType(value)}
                    value={value}
                    className={`keypad__button${
                        value === "=" || value === "C" ? "--large" : ""
                    } ${signClassFotButton(value)}${
                        checkValueType(value) === "operator"
                            ? signActiveClass(value, calculatorState.operator)
                            : ""
                    }`}
                    onClick={() => getFunction(value, dispatch)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default KeyPad;
