import React from 'react'
import { useDispatch} from 'react-redux'
import {CHOOSE_OPERATION} from '../calculator'


const OperationButton = ({operation}) => {
    const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(CHOOSE_OPERATION(operation))}>{operation}</button>
  )
}

export default OperationButton