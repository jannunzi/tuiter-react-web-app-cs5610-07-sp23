export default function TodoItem(
  {
    todo,
    onDeleteTodo,
    onEditTodo,
    onEditingTodoTitleChange
  }) {
  return(
    <li key={todo._id} className="list-group-item">
      <button
        onClick={() => onDeleteTodo(todo)}
        className="float-end btn btn-danger">
        Delete
      </button>
      <button
        onClick={() => onEditTodo(todo)}
        className="float-end btn btn-warning">
        {
          todo.editing &&
          <span>Done</span>
        }
        {
          !todo.editing &&
          <span>Edit</span>
        }
      </button>
      {
        todo.editing &&
        <input
          onChange={(event) => onEditingTodoTitleChange(event, todo)}
          value={todo.title}/>
      }
      {
        !todo.editing &&
        <span>{todo.title}</span>
      }
    </li>
  )
}