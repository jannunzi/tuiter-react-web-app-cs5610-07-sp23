export default function NewTodoForm(
  {
    onAddTodo,
    onNewTodoTitleChange
  }) {
  return(
    <li className="list-group-item">
      <button
        onClick={onAddTodo}
        className="btn btn-success float-end">
        Add
      </button>
      <input
        onChange={onNewTodoTitleChange}
        className="form-control w-75"/>
    </li>
  )
}