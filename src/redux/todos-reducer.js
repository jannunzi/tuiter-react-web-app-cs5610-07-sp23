import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: [
        {
            title: 'Go sailing',
            _id: '123',
            editing: false
        },
        {
            title: 'Buy a house',
            _id: '234',
            editing: true
        },
        {
            title: 'Buy a boat',
            _id: '345',
            editing: false
        }
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos = [
                ...state.todos,
                payload
            ]
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo._id !== payload._id)
        },
        updateTodo: (state, {payload}) => {
            state.todos = state.todos.map(
                todo => todo._id === payload._id ? payload : todo)
        }
    }
})

export default todosSlice.reducer
export const {addTodo, deleteTodo, updateTodo} = todosSlice.actions