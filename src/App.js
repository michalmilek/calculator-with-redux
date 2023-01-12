import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import './App.scss'
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { DELETE, CLEAR, EVALUATE } from './calculator'


function App() {
  const currOp = useSelector((state) => state.calculator.currentOperand)
  const prevOp = useSelector((state) => state.calculator.previousOperand)
  const op = useSelector((state) => state.calculator.operation)
  const dispatch = useDispatch()

  return (
    <div className="calculator">
      <div className="display">
        <span className="prev">{prevOp}{op}</span>
        <span className="curr">{currOp}</span>
      </div>
      <div className="buttons">
        
      <button onClick={() => dispatch(CLEAR())} className="span">AC</button>
      <button onClick={() => dispatch(DELETE())}>DEL</button>
      <OperationButton operation={'/'}/>
      <DigitButton digit={7} />
      <DigitButton digit={8} />
      <DigitButton digit={9} />
      <OperationButton operation={'*'}/>
      <DigitButton digit={4} />
      <DigitButton digit={5} />
      <DigitButton digit={6} />
      <OperationButton operation={'+'}/>
      <DigitButton digit={1} />
      <DigitButton digit={2} />
      <DigitButton digit={3} />
      <OperationButton operation={'-'}/>
      <DigitButton digit={0} />
      <DigitButton digit={'.'} />
      <button onClick={() => dispatch(EVALUATE())} className="span">=</button>
      </div>

    </div>
  );
}

export default App;
