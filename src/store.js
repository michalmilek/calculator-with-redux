import {configureStore} from '@reduxjs/toolkit'
import calculatorReducer from './calculator'

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
})