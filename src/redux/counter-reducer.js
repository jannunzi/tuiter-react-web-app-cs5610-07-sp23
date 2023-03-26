import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    counter: 123
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        }
    }
})

export default counterSlice.reducer
export const {increment, decrement} = counterSlice.actions
