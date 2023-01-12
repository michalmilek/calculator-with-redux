import React from 'react'
import { useDispatch} from 'react-redux'
import {ADD_DIGIT} from '../calculator'


const DigitButton = ({digit}) => {
    const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(ADD_DIGIT(digit))}>{digit}</button>
  )
}

export default DigitButton