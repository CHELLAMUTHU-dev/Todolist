// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="todo">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
