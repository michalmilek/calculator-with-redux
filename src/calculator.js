import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operation: null,
    previousOperand: null,
    currentOperand: '',
}



const evaluate = (currentOperand, previousOperand, operation) => {
    const curr = parseFloat(currentOperand)
    const prev = parseFloat(previousOperand)
    console.log(curr)
    console.log(prev)

    switch(operation){
        case '+':
            return prev+curr;
        case '-':
            return prev-curr;
        case '*':
            return prev*curr;
        case '/':
            return prev/curr;
        default:
            return
    }
}


export const calculator = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        ADD_DIGIT: (state, action) => {
            if(action.payload === '.' && state.currentOperand === '') return
            if(action.payload === '.' && state.currentOperand.includes('.')) return
            state.currentOperand += action.payload.toString()
        },
        CHOOSE_OPERATION: (state, action) => {
            if(state.currentOperand === '' && !state.previousOperand === null)  return{
                ...state,
                operation: action.payload
            }

            if(state.currentOperand !== '' && state.previousOperand !== null) return {
                previousOperand: evaluate(state.currentOperand, state.previousOperand, state.operation),
                currentOperand: '',
                operation: action.payload
            }
            
            if(state.currentOperand === '' && state.previousOperand === null) {
                return {...state,
                operation: null}
            }
            state.operation = action.payload
            state.previousOperand = state.currentOperand
            state.currentOperand = ''
        },
        DELETE: (state) => {
            return {...state,
            currentOperand: state.currentOperand.slice(0, -1)}
        },
        CLEAR: (state) => {
            return {
                operation: null,
                previousOperand: null,
                currentOperand: '',
            }
        },
        EVALUATE: (state) => {
            return {
            previousOperand: evaluate(state.currentOperand, state.previousOperand, state.operation),
            currentOperand: '',
            operation: null}
        }
    },
})


export const {ADD_DIGIT, CHOOSE_OPERATION, DELETE, CLEAR, EVALUATE} = calculator.actions

export default calculator.reducer

