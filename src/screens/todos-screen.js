import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, addTodo, updateTodo } from '../redux/todos-reducer'

function TodosScreen() {
    const {todos} = useSelector(state => state.todos)
    const [newTodo, setNewTodo] = useState({title: 'New Todo'})
    const dispatch = useDispatch()
    return(
        <div>
            <h1>Todos Screen</h1>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <button
                        onClick={() => dispatch(addTodo({
                            ...newTodo,
                            _id: (new Date()).getTime()
                        }))}
                    className='float-end btn btn-sm btn-success'>+</button>
                    <input value={newTodo.title}
                        onChange={(event) => setNewTodo({
                            ...newTodo,
                            title: event.target.value
                        })}
                    type="text" className='form-control w-75'/>
                </li>
                {
                    todos.map(todo =>
                        <li className='list-group-item' key={todo._id}>
                            <button onClick={() => dispatch(updateTodo({
                                ...todo,
                                editing: !todo.editing
                            }))} className='float-end btn btn-sm btn-warning'>
                                {
                                    todo.editing ? 'Save' : 'Edit'
                                }
                            </button>
                            <button
                                onClick={() => dispatch(deleteTodo(todo))}
                            className='float-end btn btn-sm btn-danger'>X</button>
                            {
                                todo.editing ?
                                (<input
                                    value={todo.title}
                                    onChange={(event) => dispatch(
                                        updateTodo( {
                                            ...todo,
                                            title: event.target.value
                                        })
                                    )}
                                type="text" className='form-control w-75'/>)
                                : <label>{todo.title}</label>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default TodosScreen