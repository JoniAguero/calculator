import React, { useReducer, useState } from "react";
import Display from "../Display/Display";
import Keys from "../Keys/Keys";
import "./Calculator.css";

export default function Calculator() {
  const initialState = { value: "0" };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [operation, setOperation] = useState(undefined);

  const rotation = () => {
    const numbers = state.value.split(operation);
    if (numbers.length === 1) {
      let reverseNumbers =
        parseFloat(numbers.toString().split("").reverse().join("")) *
        Math.sign(numbers);
      dispatch(reverseNumbers.toString());
    }
  };

  const doMathOperation = (num1, num2, type) => {
    switch (type) {
      case "+":
        return parseInt(num1) + parseInt(num2);
      case "/":
        return parseInt(num1) / parseInt(num2);
      case "-":
        return parseInt(num1) - parseInt(num2);
      case "*":
        return parseInt(num1) * parseInt(num2);

      default:
        break;
    }
  };

  const handleClick = (key) => {
    if (state.value === "0") {
      state.value = "";
    }

    if (key == "+" || key == "-" || key == "*" || key == "/") {
      setOperation(key);
    }

    if (key == "=") {
      processResult();
    } else {
      if (
        !!(operation && (key == "+" || key == "-" || key == "*" || key == "/"))
      ) {
        if (operationLastValue()) {
          state.value = state.value.slice(0, -1);
          dispatch(key);
        } else {
          processResult();
          dispatch(key);
        }
      } else {
        dispatch(key);
      }
    }
  };

  const processResult = () => {
    const numbers = state.value.split(operation);
    const result = doMathOperation(numbers[0] || 0, numbers[1] || 0, operation);
    dispatch("C");
    dispatch(result.toString());
  };

  const operationLastValue = () => {
    const value = state.value.slice(-1);
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      return true;
    } else {
      return false;
    }
  };

  function reducer(state, action) {
    switch (action) {
      case "0":
        return { value: state.value + action };
      case "1":
        return { value: state.value + action };
      case "2":
        return { value: state.value + action };
      case "3":
        return { value: state.value + action };
      case "4":
        return { value: state.value + action };
      case "5":
        return { value: state.value + action };
      case "6":
        return { value: state.value + action };
      case "7":
        return { value: state.value + action };
      case "8":
        return { value: state.value + action };
      case "9":
        return { value: state.value + action };
      case "+":
        return { value: state.value + action };
      case "-":
        return { value: state.value + action };
      case "*":
        return { value: state.value + action };
      case "/":
        return { value: state.value + action };
      case "C":
        return { value: "" };
      default:
        return { value: action };
    }
  }

  return (
    <div className="calculator">
      <Display value={state.value} />
      <div className="key-r" onClick={() => rotation()}>
        Rotation
      </div>
      <Keys handleClick={(key) => handleClick(key)} />
    </div>
  );
}
