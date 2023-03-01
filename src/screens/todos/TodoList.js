import {useState} from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {_id: '123', editing: false, title: 'Transfer to the Miami campus'},
    {_id: '234', editing: true, title:  'Buy a house'},
    {_id: '345', editing: false, title: 'Buy a boat'},
  ])
  let newTodoTitle = 'Go sailing'
  const onNewTodoTitleChange = (event) => {
    newTodoTitle = event.target.value
  }
  const onAddTodo = (event) => {
    const newTodo = {
      title: newTodoTitle,
      _id: Date.now() + ''
    }
    const newTodos = [
      ...todos,
      newTodo
    ]
    setTodos(newTodos)
  }
  const onDeleteTodo = (todoToDelete) => {
    // alert(todoToDelete._id)
    // const newTodos = todos.filter((todo) => {
    //   if(todo._id === todoToDelete._id) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })
    const newTodos = todos.filter(todo => todo._id !== todoToDelete._id)
    setTodos(newTodos)
  }
  const onEditTodo = (todoToEdit) => {
    // alert(todoToEdit._id)
    todoToEdit.editing = !todoToEdit.editing
    const newTodos = todos.map((todo) => {
      if(todo._id === todoToEdit._id) {
        return todoToEdit
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }
  const onEditingTodoTitleChange = (event, todoBeingEdited) => {
    const newTitle = event.target.value
    console.log(newTitle)
    const newTodo = {
      ...todoBeingEdited,
      title: newTitle
    }
    // const newTodos = todos.map((todo) => {
    //   if(todo._id === newTodo._id) {
    //     return newTodo
    //   } else {
    //     return todo
    //   }
    // })
    const newTodos = todos.map(todo => todo._id === newTodo._id ? newTodo : todo)
    setTodos(newTodos)
  }
  return(
    <div>
      <h1>ToDos</h1>
      <ul className="list-group">
        <NewTodoForm
          onNewTodoTitleChange={onNewTodoTitleChange}
          onAddTodo={onAddTodo}/>
        {
          todos.map(todo =>
            <TodoItem
              onEditTodo={onEditTodo}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onEditingTodoTitleChange={onEditingTodoTitleChange}/>
          )
        }
      </ul>
    </div>
  )
}